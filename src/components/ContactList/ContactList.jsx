import styles from '../ContactList/ContactList.module.css';

export default function ContactList({ contacts, hendelContactDelite }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={styles.contactItem} key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => hendelContactDelite(id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}
