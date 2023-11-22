import styles from "./Dictionary.module.css";

import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import { Card } from "../../components/Card";

export function Dictionary({ user }: any) {
  const [query, setQuery] = useState<string>("");
  const { documents: words, loading } = useFetchDocuments(
    "words",
    null,
    user.uid
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <header className={styles.header}>
        <h1>Dictionary</h1>
        <Link to="/word/create" title="Add new word">
          +
        </Link>
      </header>
      <div className={styles.dictionary}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Words search..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-datk">Pesquisar</button>
        </form>
        <p className={styles.info}>
          Muito bem {user.displayName}, você já conhece{" "}
          <span>{words.length}</span> palavras
        </p>
        <div className={styles.container_cards}>
          {loading && <p>Loading...</p>}
          {words &&
            words.map((word: any) => (
              <Card
                key={word.word}
                word={word.word}
                translation={word.translation}
                image={word.image}
              />
            ))}

          {words && words.length === 0 && (
            <div className={styles.not_found_words}>
              <p>No words found</p>
              <Link className="btn" to="/word/create">
                Create first word
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
