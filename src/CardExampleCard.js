import React from 'react'
import axios from 'axios'
import { Card, Image, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



class CardExampleCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  stateName: this.props.stateName,
                        currentDate: null,
                        currentDeaths: null,
                        currentNewCases: null,
                        currentState: null,
                        previousDate: null,
                        previousDeaths: null,
                        previousNewCases: null,
                        previousState: null,
                        color: null
        }
    }

    color() {
        if(this.state.currentNewCases > this.state.previousNewCases) {
            this.setState({ color: "red"})
        } else {this.setState({color: "green"})}
    }


    componentDidMount() {
        // Simple GET request using axios
        let stateName = this.state.stateName.toLowerCase()
        let today = new Date()
        let previousDay = new Date(today)
        previousDay.setDate(previousDay.getDate() - 2)
        let previousDate = (previousDay.getMonth() + 1) + '-' + previousDay.getDate() + '-' +  previousDay.getFullYear();
        console.log("previousDate" + previousDate)
        axios.get(`http://localhost:8080/data/state/${stateName}/today`)
            .then(response => {
                console.log(response);
                this.setState({
                        currentDate: response.data.date,
                        currentDeaths: response.data.deaths,
                        currentNewCases: response.data.newCases,
                        currentState: response.data.state
                      });
                });
        axios.get(`http://localhost:8080/data/state/${stateName}/date/${previousDate.padStart(10,'0')}`)
        .then(response => {
                        console.log(response);
                        this.setState({
                                previousDate: response.data.date,
                                previousDeaths: response.data.deaths,
                                previousNewCases: response.data.newCases,
                                previousState: response.data.state
                              });
                              this.color()
                        });

    }

    render() {
        return (
        <Card>
            <Card.Content>
                <Link to={{pathname: '/states', stateName: `${this.state.stateName}` }} style={{ textDecoration: 'none' }}>
                <h1 style={{ textDecoration: 'none' }}>{this.state.stateName}</h1>
                <br/>
                <Card.Meta>
                    <Image src={require(`./assets/image/${this.state.stateName}.png`).default} size='small'/>
                </Card.Meta>
                </Link>
            </Card.Content>
            <br/>
            <Card.Content>
            <div>
            <Icon name='chart line' size='large' />   New Cases: {this.state.currentNewCases}
            </div>
            </Card.Content>
            <Card.Content>
            <div >
            <Icon name='ambulance' size='large' />    New Deaths: {this.state.currentDeaths}
            </div>
            </Card.Content>
          </Card>
        );
    }
}

export default CardExampleCard
