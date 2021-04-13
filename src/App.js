import React from 'react'
import CardExampleCard from './CardExampleCard.js'
import HeaderExampleTextAlignment from './HeaderExampleTextAlignment.js'
import { Card } from 'semantic-ui-react'
import ButtonExampleMultipleConditionals from './ButtonExampleMultipleConditionals.js'
import UsStates from './UsStates.js'
import States from './States.js'
import World from './World.js'
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

     showUsStates = () => {
        if(window.location.pathname === '/') {
            return <UsStates/>
        }
    }

    showWorld = () => {
            if(window.location.pathname === '/world') {
                return <World/>
            }
        }

    render() {
        return (
        <div>

            <BrowserRouter>
                <HeaderExampleTextAlignment/>
                <br/>
                <ButtonExampleMultipleConditionals/>
                <br/>
                <br/>
                <Route path="/" exact component={UsStates} />
                <Route path="/world" exact component={World} />
                <Route path="/states" exact component={States} />
            </BrowserRouter>
        </div>
        );
    }
}

export default App;
