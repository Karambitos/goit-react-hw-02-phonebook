import styles from '../Input/Input.module.css';
import PropTypes from 'prop-types';

const Input = ({ state, handleInputChange }) => {
  return (
    <div>
      <label className={styles.label} htmlFor="name">
        Name:
      </label>
      <input
        className={styles.input}
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagna"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
        value={state.name}
        onChange={handleInputChange}
      />
      <label className={styles.label} htmlFor="number">
        Number:
      </label>
      <input
        className={styles.input}
        type="text"
        name="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        required
        value={state.number}
        onChange={handleInputChange}
      />
    </div>
  );
};

Input.propTypes = {
  state: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired
};

// const Input = ({ state, handleInputChange }) => {
//   return Object.entries(state).map(([key, value]) => {
//     return (
//       <div key={key}>
//         <label className={styles.label} htmlFor={key}>
//           {key}:
//         </label>
//         <input
//           className={styles.input}
//           type="text"
//           name={key}
//           // FIXME: dosen't work pattern and title
//           pattern={
//             key === 'number'
//               ? // \+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}
//                 "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               : "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           }
//           title={
//             key === 'number'
//               ? 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//               : "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           }
//           required
//           value={value}
//           onChange={handleInputChange}
//         />
//       </div>
//     );
//   });
// };

export default Input;
