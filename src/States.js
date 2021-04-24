import React from 'react'
import axios from 'axios'
import { Header } from 'semantic-ui-react'
import Chart from './Chart.js'
import TableExampleSelectableRow from './TableExampleSelectableRow.js'

class States extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  stateName: this.props.location.stateName.toLowerCase()}
    }

    render() {
        return (
            <div>
                <Header as='h1'>{this.state.stateName}</Header>
                <Chart stateName={this.state.stateName.toLowerCase()}/>
                <TableExampleSelectableRow stateName={this.state.stateName.toLowerCase()} />
                <br/>
            </div>
        );
    }
}

export default States;