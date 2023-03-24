import React, { Component } from "react";
import { ContactForm } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { StatWrap } from './Form/Form.styled';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (contact) => {

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact]
    }))
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value })
  };

  getFilterContacts = () => {
    const normalaizedFilter = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalaizedFilter))
  };



  render() {
    const filterContacts = this.getFilterContacts();
    return (
      <StatWrap >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>

        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList contacts={filterContacts} />
      </StatWrap >
    );
  }

};


