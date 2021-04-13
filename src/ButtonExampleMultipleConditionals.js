import React from 'react'
import { Button, Segment, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const ButtonExampleMultipleConditionals = () => (

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
)

export default ButtonExampleMultipleConditionals