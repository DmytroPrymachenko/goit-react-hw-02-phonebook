import React, { Component } from 'react'

export default class Element extends Component {
    render() {
      const {namber, name} = this.props
    return (
     <li>
            <p>{namber}</p>
            <p>{name}</p>
  </li>
    )
  }
}
