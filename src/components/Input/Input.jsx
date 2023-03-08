import styles from '../Input/Input.module.css';

const Input = ({ state, handleInputChange }) => {
  return Object.entries(state).map(([key, value]) => {
    return (
      <div key={key}>
        <label className={styles.label} htmlFor={key}>
          {key}:
        </label>
        <input
          className={styles.input}
          type="text"
          name={key}
          // FIXME: dosen't work pattern and title
          // pattern={
          //   key === 'number'
          //     ? // \+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}
          //       '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}'
          //     : "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // }
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title={
            key === 'number'
              ? 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
              : "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          }
          required
          value={value}
          onChange={handleInputChange}
        />
      </div>
    );
  });
};

export default Input;
