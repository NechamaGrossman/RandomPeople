import React from 'react';
import axios from 'axios';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import "bootstrap-slider/dist/css/bootstrap-slider.css"

class AddRandomPerson extends React.Component {

    state = {
        min: 1,
        max: 100,
        currentValue: [1, 100],
        currentNumberValue:0
    };

    changeValue = e => {
        this.setState({ currentValue: e.target.value })
    }

    changeNumberValue = e => {
        this.setState({ currentNumberValue: e.target.value })
    }
    onsubmitClick = async () => {
        const amount = this.state.currentNumberValue;
        const min = this.state.currentValue[0];
        const max = this.state.currentValue[1];
        console.log(min, max, amount)
        await axios.post('api/person/AddRandomPerson', { minAge: min,maxAge: max, number: amount });
        this.props.history.push('/');
    }
    render() {
        return (
            <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
                <h2> Choose an age range for the random person</h2>
                <ReactBootstrapSlider
                    value={this.state.currentValue}
                    slideStop={this.changeValue}
                    max={this.state.max}
                    min={this.state.min} />
                <br />
                <h2> Choose an amount of people to add</h2>
                <ReactBootstrapSlider
                    value={this.state.currentNumberValue}
                    slideStop={this.changeNumberValue}
                    max={this.state.max} />
                <br />
                <button className="btn btn-info" onClick={this.onsubmitClick}>Submit</button>
            </div >
        )
    }
}
export default AddRandomPerson;