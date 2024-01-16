import { useInsertDocument } from "../hooks/useInsertDocument";

import { useState, FormEvent } from "react";

import styles from "./Modal.module.css";

export function Modal({
  setModalOn,
  user,
  title,
  note,
  setTitle,
  setNote,
  modeReading,
  setModeReading,
}: any) {
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
    setTitle("");
    setNote("");
  };

  const modal = document.querySelectorAll("._modal_taytw_1");

  document.addEventListener("click", (e) => {
    if (e.target !== modal[0]) {
      console.log("a");
    }
  });

  return (
    <form className={styles.modal} onSubmit={handleSubmit}>
      <h2>Título</h2>
      <input
        type="text"
        className={styles.inputModal}
        minLength={3}
        maxLength={25}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <h2>Texto</h2>

      {!modeReading ? (
        <textarea
          className={styles.textareaModal}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      ) : (
        <textarea
          className={styles.textareaModal}
          style={{ height: "150px" }}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      )}

      <button
        className={styles.closeModal}
        onClick={() => {
          setModalOn(false);
          setTitle("");
          setNote("");
          setModeReading(false);
        }}
      >
        X
      </button>
      {!modeReading && <button className={styles.btnSubmit}>Escrever</button>}

      {formError && (
        <p className="error" style={{ textAlign: "center" }}>
          {formError}
        </p>
      )}
    </form>
  );
}
