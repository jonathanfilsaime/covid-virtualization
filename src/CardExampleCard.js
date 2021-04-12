import React from 'react'
import axios from 'axios'
import { Card, Image } from 'semantic-ui-react'


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
            this.setState({ color: 'red'})
        } else {this.setState({color: 'green'})}
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
                console.log("tired")
                console.log(this.state)
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
                        console.log("previous tired")
                        console.log(this.state)
                        this.color()
                        });

    }




    render() {

        return (
        <Card color={this.state.color}>
            <Card.Content>
                <Card.Header>{this.state.stateName}</Card.Header>
                <Card.Meta>
                    <Image src={require('./image/Alabama.png')} size='medium'/>
                </Card.Meta>
              <p>New Cases: {this.state.currentNewCases}</p>
            </Card.Content>
            <Card.Content extra>
              <p>New Deaths: {this.state.currentDeaths}</p>
            </Card.Content>
          </Card>
        );
    }
}

export default CardExampleCard
