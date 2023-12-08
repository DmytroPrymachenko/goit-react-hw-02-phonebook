import { nanoid } from "nanoid";
import Form from "./Form";
import FormElementList from "./FormElementList";
import { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
  }
  contactsState = (contact) => {
    const newContact = {
      ...contact,
      id: nanoid(),
    
    }
this.setState(prev => ({ contacts: [...prev.contacts, newContact],  }))

  }
  render() {
    console.log(this.state)
return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     
    <Form contactsState={ 
      this.contactsState
    } />
    <FormElementList
      contacts={this.state.contacts } />

    </div>
  );

   }
  



  
};
