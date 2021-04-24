import React from 'react'
import CardExampleCard from './CardExampleCard.js'
import HeaderExampleTextAlignment from './HeaderExampleTextAlignment.js'
import { Card, Table, Flag } from 'semantic-ui-react'
import ButtonExampleMultipleConditionals from './ButtonExampleMultipleConditionals.js'
import FlagExampleTable, {countries} from './FlagExampleTable.js'
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

class World extends React.Component {
    constructor(props) {
        super(props);
        this.state = { world: []};
    }

    componentDidMount() {
            axios.get(`http://localhost:8080/data/world`)
                .then(response => this.setState({world: response.data}))
        }

    render() {
                    return (
                      <Table celled selectable>
                        <Table.Header>
                          <Table.Row>
                            <Table.HeaderCell>Country</Table.HeaderCell>
                            <Table.HeaderCell>New Cases</Table.HeaderCell>
                            <Table.HeaderCell>Deaths</Table.HeaderCell>
                          </Table.Row>
                        </Table.Header>

                        <Table.Body>
                        {this.state.world.map(country => {
                        console.log("country name ", country.country)
                        return (
                            <Table.Row>
                                <Table.Cell><Flag name={countries.find((x) => x.name === country.country)?.countryCode } />{country.country}</Table.Cell>
                                <Table.Cell>{country.new_CASES.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Table.Cell>
                                <Table.Cell>{country.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Table.Cell>
                            </Table.Row>
                        )})}
                        </Table.Body>
                      </Table>
//                <FlagExampleTable world={this.state.world}/>
                );

    }
}

export default World;
