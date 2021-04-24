import React from 'react';
import {Line} from 'react-chartjs-2';
import { Segment  } from 'semantic-ui-react'
import axios from 'axios'



class Chart extends React.Component {
    constructor(props) {
        super(props);

        this.state = { labels: [],
                         datasets: [
                           {
                             label: '',
                             fill: '',
                             lineTension: '',
                             backgroundColor: '',
                             borderColor: '',
                             borderWidth: 3,
                             data: [],
                           }
                         ]};
    }

    componentDidMount() {

        let days = [];
        let newCases =[];
        let deaths = [];
        console.log("in state this.state,stateName ", this.props.stateName)
            axios.get(`http://localhost:8080/data/state/${this.props.stateName}/days/60`)
                                .then(response => {
                                   console.log("response ", this.state.datasets[0].data)
                                   response.data.map(d => {
                                        days.push(d.date);
                                        newCases.push(d.newCases);
                                        deaths.push(d.deaths);
                                    });
                                    console.log("new cases: ", newCases.reverse())
                                    this.setState({labels: days.reverse()})
                                    this.setState(state => ({
                                      datasets: [{
                                        ...state.datasets[0],
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'rgba(0, 152, 240, 1)',
                                        borderColor: 'rgba(0, 152, 240, 1)',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(0, 152, 240, 1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(0, 152, 240, 1)',
                                        pointHoverBorderColor: 'rgba(0, 152, 240, 1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        label: 'new Cases',
                                        data: newCases.reverse()
                                      },{
                                        ...state.datasets[1],
                                        fill: false,
                                        lineTension: 0.1,
                                        backgroundColor: 'rgba(240, 0, 0, 1)',
                                        borderColor: 'rgba(240, 0, 0, 1)',
                                        borderCapStyle: 'butt',
                                        borderDash: [],
                                        borderDashOffset: 0.0,
                                        borderJoinStyle: 'miter',
                                        pointBorderColor: 'rgba(240, 0, 0, 1)',
                                        pointBackgroundColor: '#fff',
                                        pointBorderWidth: 1,
                                        pointHoverRadius: 5,
                                        pointHoverBackgroundColor: 'rgba(240, 0, 0, 1)',
                                        pointHoverBorderColor: 'rgba(240, 0, 0, 1)',
                                        pointHoverBorderWidth: 2,
                                        pointRadius: 1,
                                        pointHitRadius: 10,
                                        label: 'deaths',
                                        data: deaths.reverse()
                                      }]
                                    }));
                                    this.setState(state => ({

                                    }));
                                });

    }


  render() {
    return (
      <Segment>
        <Line
          data={this.state}
          options={{
            title:{
              display:true,
              text:'New Cases',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </Segment>
    );
  }
}

export default Chart;