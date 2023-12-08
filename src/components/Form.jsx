import { Component } from 'react'

export default class Form extends Component {
   state = {
  namber: '',
  name: '',
}
    onChangeState = ({ target: {value, name} }) => {
     this.setState({ [name]: value });
} 
    onSubmitForm = (e) => {
        e.preventDefault();
         this.props.contactsState(this.state)
}
    
    
    
    render() {
      const { name, namber} = this.state
    return (
        <form onSubmit={this.onSubmitForm}>
            <label htmlFor="name">Name</label>
            <input onChange={this.onChangeState} id='name' name='name' type="text" value={name}/>
             <label htmlFor="phone">Phone</label>
            <input onChange={this.onChangeState} id='phone' name='namber' type="tel" value={namber} />
            <button type='submit'>BUTTON</button>
      </form>
    )
  }
}
