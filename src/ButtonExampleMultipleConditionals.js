import React from 'react'
import { Button, Segment, Grid, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Moment from 'moment'


const ButtonExampleMultipleConditionals = () => (

<div>
  <div class="ui one column center aligned page grid">
      <Button.Group>
            <Link to="/">
            <Button>USA</Button>
            </Link>
        <Button.Or />
            <Link to="/world">
            <Button>World</Button>
            </Link>
      </Button.Group>
  </div>
  <Icon name='clock outline' size='large' />{Moment(Date().toLocaleString()).format('MMMM Do YYYY')}
  </div>
)

export default ButtonExampleMultipleConditionals