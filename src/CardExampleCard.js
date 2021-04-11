import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardExampleCard = props => (
  <Card>
    <Card.Content>
        <Card.Header>{props.stateName}</Card.Header>
        <Card.Meta>
            <Image src={require('./image/Alabama.png')} size='medium'/>
        </Card.Meta>
      <p>New Cases: </p>
    </Card.Content>
    <Card.Content extra>
      <p>New Deaths: </p>
    </Card.Content>
  </Card>
)

export default CardExampleCard
