import styles from "./Dashboard.module.css";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { Modal } from "../../components/Modal";

export function Dashboard() {
  const [date, setDate] = useState(new Date());
  const [modalOn, setModalOn] = useState<Boolean>(false);

  const onChange = (newDate: any) => {
    setDate(newDate);
  };

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
      <main className={styles.notes}>
        <h1>Anotações</h1>
      </main>
      {modalOn && <Modal setModalOn={setModalOn} />}
    </main>
  );
}
