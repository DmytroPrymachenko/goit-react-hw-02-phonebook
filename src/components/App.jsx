import { nanoid } from 'nanoid';
import Form from './Form';
import FormElementList from './FormElementList';
import { Component } from 'react';
import { FormDiv, FormElementDiv } from './StylesJSX/FormElementListStyles';
import Search from './Search';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  contactsState = contact => {
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    if (
      this.state.contacts.some(
        el => el.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${contact.name} is already in contacts`);
    } else {
      this.setState(prev => ({ contacts: [...prev.contacts, newContact] }));
    }
  };

  handleDelete = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onChangeSearch = e => {
    this.setState({ filter: e.target.value });
  };
  filterContacts = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    console.log(this.state.contacts);
    return (
      <FormDiv
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 18,
          color: '#010101',
        }}
      >
        <FormElementDiv>
          <Form contactsState={this.contactsState} />
          <Search
            onSearch={this.onChangeSearch}
            valueSearch={this.state.filter}
          />
          <FormElementList
            contacts={this.filterContacts()}
            onDelete={this.handleDelete}
            // onFiltered={this.filterContacts}
          />
        </FormElementDiv>
      </FormDiv>
    );
  }
}
