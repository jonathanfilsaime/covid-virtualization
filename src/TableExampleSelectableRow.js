import React from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios'

class TableExampleSelectableRow extends React.Component {
    constructor(props) {
        super(props);
        let countyData = {};
        this.props.counties.forEach((county) => {
            countyData[county] = {};
            console.log("countyData[county] -> ", countyData)
         });
        this.state = countyData;
    }



    componentDidMount() {
        this.props.counties.forEach(county => axios.get(`http://localhost:8080/data/county/${county}/state/${this.props.stateName}/today`)
                                            .then(response => {this.setState({[county]: response.data});
                                                                console.log(response)}
                                                ))
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
                {this.props.counties.map(county => { return (
                <Table.Row>
                    <Table.Cell>{county}</Table.Cell>
                    <Table.Cell>{this.state[county].newCases}</Table.Cell>
                    <Table.Cell>{this.state[county].deaths}</Table.Cell>
                  </Table.Row>
                )})}

                </Table.Body>
              </Table>
        );
   }
}

export default TableExampleSelectableRow