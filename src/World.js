import React from 'react'
import CardExampleCard from './CardExampleCard.js'
import HeaderExampleTextAlignment from './HeaderExampleTextAlignment.js'
import { Card } from 'semantic-ui-react'
import ButtonExampleMultipleConditionals from './ButtonExampleMultipleConditionals.js'
import logo from './logo.svg';
import './App.css';

class World extends React.Component {
    constructor(props) {
        super(props);
        this.state = { countries: ['Haiti','Us','France'],
        };
    }



    render() {
        return (
        <div>
            <Card.Group itemsPerRow={3}>
                {this.state.countries.map(item => <h1>{item}</h1>)};
            </Card.Group>
        </div>
        );
    }
}

export default World;
