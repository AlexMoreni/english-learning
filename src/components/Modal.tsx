import { useInsertDocument } from "../hooks/useInsertDocument";

import { useState, FormEvent } from "react";

import styles from "./Modal.module.css";

export function Modal({ setModalOn, user }: any) {
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [formError, setFormError] = useState<null | string>(null);
  const { insertDocument } = useInsertDocument("notes");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    if (!title || !note) {
      setFormError("Preencha todos os campos");
      return;
    }

    try {
      await insertDocument({
        title,
        note,
        uid: user.uid,
        createdBy: user.displayName,
      });
    } catch (error) {
      console.log(error);
    }

    setModalOn(false);
  };

  return (
    <form className={styles.modal} onSubmit={handleSubmit}>
      <h2>Título</h2>
      <input
        type="text"
        className={styles.inputModal}
        minLength={3}
        maxLength={15}
        onChange={(e) => setTitle(e.target.value)}
      />

      <h2>Texto</h2>
      <textarea
        className={styles.textareaModal}
        onChange={(e) => setNote(e.target.value)}
      ></textarea>

      <button className={styles.closeModal} onClick={() => setModalOn(false)}>
        X
      </button>
      <button className={styles.btnSubmit}>Escrever</button>
      {formError && (
        <p className="error" style={{ textAlign: "center" }}>
          {formError}
        </p>
      )}
    </form>
  );
}
