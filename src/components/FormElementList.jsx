import React, { Component } from 'react'
import Element from './Element'

export default class FormElementList extends Component {
    render() {
      const { contacts } = this.props;
        
    return (
      <div>
  <ul>
         {contacts.map((contact) => (
            <Element key={contact.id} namber={contact.namber} name={contact.name} />
          ))}
</ul>
</div>
    )
  }
}
function fm1() {
fm2(10)
}
function fm2(namber) {
  
}