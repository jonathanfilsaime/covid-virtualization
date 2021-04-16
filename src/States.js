import React from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react'
import TableExampleSelectableRow from './TableExampleSelectableRow.js'

class States extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  stateName: this.props.location.stateName,
                                counties: [],
                                newCases: [],
                                deaths: []
                }
    }

    componentDidMount(){
        let stateName = this.state.stateName.toLowerCase()
//        axios.get(`http://localhost:8080/data/state/${stateName}/days/30`)
//                    .then(response => response.data.map(data => this.setState({ date: this.state.date.concat([data.date]),
//                                                                            deaths: this.state.deaths.concat([data.deaths]),
//                                                                            newCases: this.state.newCases.concat([data.newCases])})));
        axios.get(`http://localhost:8080/data/state/${stateName}`)
                    .then(response => response.data.map(county => this.setState({ counties: this.state.counties.concat([county])})));
    }

    render() {
        return (
            <div>
                <Header as='h1'>{this.state.stateName}</Header>
                <TableExampleSelectableRow stateName={this.state.stateName.toLowerCase()} counties={this.state.counties}/>
            </div>
        );
    }
}

export default States;