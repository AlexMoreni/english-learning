import styles from "./Dashboard.module.css";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Modal } from "../../components/Modal";
import { Highlighter } from "../../components/Highlighter";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import { Link } from "react-router-dom";

export function Dashboard({ user }: any) {
  const [date, setDate] = useState(new Date());
  const [modalOn, setModalOn] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [modeReading, setModeReading] = useState<boolean>(false);

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
          <Link to="/test">
            <div>
              <img src="/exame.png" alt="Chapéu de formatura" />
              <h2>Prova</h2>
            </div>
          </Link>
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
            <Highlighter
              title={note.title}
              text={note.note}
              id={note.id}
              key={note.title}
              setModalOn={setModalOn}
              setTitle={setTitle}
              setNote={setNote}
              setModeReading={setModeReading}
            />
          ))}
      </main>
      {modalOn && (
        <Modal
          setModalOn={setModalOn}
          user={user}
          title={title}
          setTitle={setTitle}
          note={note}
          setNote={setNote}
          modeReading={modeReading}
          setModeReading={setModeReading}
        />
      )}
    </main>
  );
}
