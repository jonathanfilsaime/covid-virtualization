import React from 'react'
import { Button, Segment, Grid } from 'semantic-ui-react'

const ButtonExampleMultipleConditionals = () => (

  <div class="ui one column center aligned page grid">
      <Button.Group>
        <Button>USA</Button>
        <Button.Or />
        <Button>World</Button>
      </Button.Group>
  </div>
)

export default ButtonExampleMultipleConditionals