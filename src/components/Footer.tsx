import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h3>O lugar certo, para um inglês correto!</h3>
      <p>English leraning &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
