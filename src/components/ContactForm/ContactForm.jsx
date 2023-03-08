import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Input from '../Input/Input';
import styles from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';


class ContactForm extends Component {
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

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  hendelContactCreate: PropTypes.func.isRequired
};



export default ContactForm;
