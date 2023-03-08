import styles from '../Filter/Filter.module.css';

export default function Filter({ value, hendelChangeSerch }) {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={hendelChangeSerch}
      />
    </label>
  );
}
