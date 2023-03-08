import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input/Input';
import styles from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    name: '',
    number: '',
  };

  contactExists = (fieldName, fieldValue) => {
    const { contacts } = this.props;
    return contacts.some(contact => contact[fieldName] === fieldValue);
  };

  handleSubmit = event => {
    event.preventDefault();

    if (
      this.contactExists('name', this.state.name) ||
      this.contactExists('number', this.state.number)
    ) {
      alert('This name or number already exists.');
      return;
    }

    const newContact = { id: uuidv4(), ...this.state };
    // FIXME: where I can destructure props in class
    this.props.hendelContactCreate(newContact);
    this.reset();
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    // const re = new RegExp(
    //   '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
    //   'i'
    // );
    // // "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    // if (value.match(re) != null) {
    //   this.setState({ [name]: value });
    // }
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <Input state={this.state} handleInputChange={this.handleInputChange} />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
