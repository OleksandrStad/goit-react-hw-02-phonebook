import React, { Component } from "react";
import { ContactForm } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { StatWrap } from './Form/Form.styled';


export class App extends Component {
  state = {
    contacts: [],

  };

  addContact = (contact) => {

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact]
    }))

  };

  render() {

    return (
      <StatWrap >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>


        <ContactsList contacts={this.state.contacts} />
      </StatWrap >
    );
  }

};


