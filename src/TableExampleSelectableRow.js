import React from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'

class TableExampleSelectableRow extends React.Component {
    constructor(props) {
        super(props);
        let countyData = {}
        props.counties.forEach(county => {
            console.log("props.counties.county ", county);
            countyData[county] = {};
            console.log("countyData[] ", countyData)
         });
        this.state = countyData;
    }



    componentDidMount() {
        console.log("countyData ", this.state.countyData)
        this.props.counties.map(county => axios.get(`http://localhost:8080/data/county/${county}/state/${this.props.stateName}/today`)
                                            .then(response => this.setState(
                                                {[county]: response.data}
                                                )))
    }



    render() {
        console.log(this.state)
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
                {this.props.counties.map(county => { return (
                <Table.Row>
                    <Table.Cell>{county}</Table.Cell>
                    <Table.Cell>No Action</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                  </Table.Row>
                )})}

                </Table.Body>
              </Table>
        );
   }
}

export default TableExampleSelectableRow