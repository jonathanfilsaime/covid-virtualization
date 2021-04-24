import React from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'

class TableExampleSelectableRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {stateName: this.props.stateName,
                       countyData: [],}
    }



    componentDidMount() {
        console.log("did I even get called")
        axios.get(`http://localhost:8080/data/counties/state/${this.state.stateName}/today`)
            .then(response => this.setState({countyData: response.data}))
    }

    render() {
        console.log("this.state -> ", this.state)
            return (
              <Table celled selectable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Counties</Table.HeaderCell>
                    <Table.HeaderCell>New Cases</Table.HeaderCell>
                    <Table.HeaderCell>Deaths</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                {this.state.countyData.map(county => {return (
                    <Table.Row>
                        <Table.Cell>{county.countyName}</Table.Cell>
                        <Table.Cell>{county.newCases.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Table.Cell>
                        <Table.Cell>{county.deaths.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Table.Cell>
                    </Table.Row>
                )})}
                </Table.Body>
              </Table>
        );
   }
}

export default TableExampleSelectableRow



