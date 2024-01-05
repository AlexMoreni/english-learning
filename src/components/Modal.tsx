import styles from "./Modal.module.css";

export function Modal({ setModalOn }: any) {
  return (
    <div className={styles.modal}>
      <h2>Título</h2>
      <input type="text" className={styles.inputModal} />

      <h2>Texto</h2>
      <textarea className={styles.textareaModal}></textarea>

      <button className={styles.closeModal} onClick={() => setModalOn(false)}>
        X
      </button>
      <button className={styles.btnSubmit}>Escrever</button>
    </div>
  );
}
