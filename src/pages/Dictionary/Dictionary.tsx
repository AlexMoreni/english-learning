import styles from "./Dictionary.module.css";
import { Link } from "react-router-dom";

export function Dictionary() {
  return (
    <header className={styles.header}>
      <h1>Dictionary</h1>
      <Link to="/word/create" title="Add new word">
        +
      </Link>
    </header>
  );
}
