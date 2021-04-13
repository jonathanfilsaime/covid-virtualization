import React from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react'

class States extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  stateName: this.props.location.stateName,
                                state: null,
                                newCases: [],
                                deaths: [],
                                date: []
                }
    }

    componentDidMount(){
        let stateName = this.state.stateName.toLowerCase()
        axios.get(`http://localhost:8080/data/state/${stateName}/days/30`)
                    .then(response => response.data.map(c => this.setState({ date: this.state.date.concat([c.date]),
                                                                            deaths: this.state.deaths.concat([c.deaths]),
                                                                            newCases: this.state.newCases.concat([c.newCases])})));
    }

    render() {
        return (
            <div>
                <Header as='h1'>{this.state.stateName}</Header>
            </div>
        );
    }
}

export default States;