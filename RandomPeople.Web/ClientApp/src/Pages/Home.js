import React from 'react';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';

class Home extends React.Component {
    state = {
        people: [],
        pieChartMode: false,
    }

    componentDidMount = async () => {
        this.refreshPeople();
    }

    refreshPeople = async () => {
        const { data } = await axios.get('/api/Person/GetPeople');
        this.setState({ people: data });
    }

    togglePieMode = () => {
        const pieChartMode = this.state.pieChartMode;
        this.setState({pieChartMode: !pieChartMode})
    }
    render() {
        const {people} = this.state
        return (
            
            <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
                <button className="btn btn-danger" onClick={this.togglePieMode}>Toggle Pie Chart</button>
                {!!this.state.pieChartMode && 
                    <PieChart viewBoxSize="[800,800]" animate="true" data={[
                    { title: "ages: 1 - 10", value: people.filter(p => p.age > 0 && p.age < 10).length, color: "#AEA1FF" },
                    { title: "ages: 10 - 20", value: people.filter(p => p.age > 10 && p.age < 20).length, color: "#E27300" },
                    { title: "ages: 20 - 30", value: people.filter(p => p.age > 20 && p.age < 30).length, color: "#FA28FF" },
                    { title: "ages: 30 - 40", value: people.filter(p => p.age > 30 && p.age < 40).length, color: "#B0BC00" },
                    { title: "ages: 40 - 50", value: people.filter(p => p.age > 40 && p.age < 50).length, color: "#E45627" },
                    { title: "ages: 50 - 60", value: people.filter(p => p.age > 50 && p.age < 60).length, color: "#D33115" },
                    { title: "ages: 60 - 70", value: people.filter(p => p.age > 60 && p.age < 70).length, color: "#FA28FF" },
                    { title: "ages: 70 - 80", value: people.filter(p => p.age > 70 && p.age < 80).length, color: "#C45100" },
                    { title: "ages: 80 - 90", value: people.filter(p => p.age > 80 && p.age < 90).length, color: "#0062B1" },
                    { title: "ages: 90 - 100", value: people.filter(p => p.age > 90 && p.age < 100).length, color: "#653294" }
                ]} />}
                <br/>
                <div style={{ backgroundColor: 'white', minHeight: 1000, paddingTop: 10 }}>
                    <table className="table table-hover table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th> Last Name</th>
                                <th> Age</th>
                                <th>Date of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {people.map((person, key) => {
                                return (
                                    <tr>
                                        <td>{person.firstName}</td>
                                        <td>{person.lastName}</td>
                                        <td>{person.age}</td>
                                        <td>{person.dateOfBirth}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Home;