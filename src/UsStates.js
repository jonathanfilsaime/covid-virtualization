import React from 'react'
import CardExampleCard from './CardExampleCard.js'
import HeaderExampleTextAlignment from './HeaderExampleTextAlignment.js'
import { Card } from 'semantic-ui-react'
import ButtonExampleMultipleConditionals from './ButtonExampleMultipleConditionals.js'
import logo from './logo.svg';
import './App.css';

class UsStates extends React.Component {
    constructor(props) {
        super(props);
        this.state = { stateName: ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
        'Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana',
        'Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska',
        'Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio',
        'Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee',
        'Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'],
        };
    }



    render() {
        return (
        <div>
            <Card.Group itemsPerRow={5}>
                {this.state.stateName.map(item => <CardExampleCard stateName={item}/>)};
            </Card.Group>
        </div>
        );
    }
}

export default UsStates;
