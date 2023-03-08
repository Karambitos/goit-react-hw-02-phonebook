import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Component } from 'react';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts && JSON.parse(contacts).length) {
      this.setState({
        contacts: JSON.parse(contacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  hendelContactCreate = newContact => {
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  hendelContactDelite = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  hendelChangeSerch = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter, contacts } = this.state;
    const filterContacts = this.getFilterContacts();

    return (
      <div className="main">
        <h1>Phonebook</h1>
        <ContactForm
          contacts={contacts}
          hendelContactCreate={this.hendelContactCreate}
        />
        <h2>Contacts</h2>
        <Filter value={filter} hendelChangeSerch={this.hendelChangeSerch} />
        <ContactList
          contacts={filterContacts}
          hendelContactDelite={this.hendelContactDelite}
        />
      </div>
    );
  }
}
