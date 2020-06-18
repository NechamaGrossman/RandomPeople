import React from 'react';
import axios from 'axios';
import { produce } from 'immer';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar'

class AddPerson extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: '',
            dateOfBirth: new Date(),
        }
    };
    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }
    onAddClick = async () => {
        await axios.post('/api/person/AddPerson', this.state.person);
        this.props.history.push('/');;
    }
    handleChange = date => {
        const nextState = produce(this.state, draftState => {
            draftState.person.dateOfBirth = date;
        });
        this.setState(nextState);
    }
        render(){
            return (
                <div className="well" style={{ marginTop: 60 }}>
                    <div className="row">
                        <div className="col-md-12">
                            <input type="text" className="form-control" placeholder="First Name" name="firstName" onChange={this.onTextChange} />
                            <input type="text" className="form-control" placeholder="Last Name" name="lastName" onChange={this.onTextChange} />
                            <input type="text" className="form-control" placeholder="Age" name="age" onChange={this.onTextChange} />
                            <label> Date of Birth</label>
                            <Calendar
                                selected={this.state.dateOfBirth}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="container" style={{ marginTop: 20 }}>
                        <div className="row">
                            <button className="btn btn-primary" onClick={this.onAddClick}>Add Person</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
    export default AddPerson;