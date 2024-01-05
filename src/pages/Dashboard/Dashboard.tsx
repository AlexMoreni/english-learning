import styles from "./Dashboard.module.css";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Modal } from "../../components/Modal";
import { Highlighter } from "../../components/Highlighter";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";

export function Dashboard({ user }: any) {
  const [date, setDate] = useState(new Date());
  const [modalOn, setModalOn] = useState<Boolean>(false);

  const onChange = (newDate: any) => {
    setDate(newDate);
  };

  const { documents: notes } = useFetchDocuments("notes", null, user.uid);

  return (
    <main>
      <header className={styles.header}>
        <div className={styles.cards}>
          <div onClick={() => setModalOn(true)}>
            <img src="/writing.png" alt="Lápis roxo" />
            <h2>Escrever</h2>
          </div>
          <div>
            <img src="/exame.png" alt="Chapéu de formatura" />
            <h2>Prova</h2>
          </div>
        </div>
        <Calendar
          className={styles.calendar}
          onChange={onChange}
          value={date}
        />
      </header>
      <main>
        <h1 className={styles.notes}>Anotações</h1>

        {notes &&
          notes.map((note: any) => (
            <Highlighter title={note.title} text={note.note} key={note.title} />
          ))}
      </main>
      {modalOn && <Modal setModalOn={setModalOn} user={user} />}
    </main>
  );
}
