import styles from "./Dictionary.module.css";

import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import { Card } from "../../components/Card";

export function Dictionary({ user }: any) {
  const [search, setSearch] = useState<string>("");

  const { documents: words, loading } = useFetchDocuments(
    "words",
    search ? search : null,
    user.uid
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search) {
      console.log(words);
    }
  };

  return (
    <>
      <header className={styles.header}>
        <h1>Dicionário</h1>
        <Link to="/word/create" title="Adicionar nova palavra">
          +
        </Link>
      </header>
      <div className={styles.dictionary}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Procurar palavras..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-datk">Pesquisar</button>
        </form>
        {words ? (
          words.length === 1 ? (
            <p className={styles.info}>
              Muito bem {user.displayName}, você já conhece <span>1</span>{" "}
              palavra.
            </p>
          ) : (
            <p>
              <p className={styles.info}>
                Muito bem {user.displayName}, você já conhece{" "}
                <span>{words.length}</span> palavras.
              </p>
            </p>
          )
        ) : (
          <p className={styles.info}>
            Você ainda não adicionou nenhuma palavra. Vamos lá, comece agora!
          </p>
        )}

        <div className={styles.container_cards}>
          {loading && <p>Carregando...</p>}
          {words &&
            words.map((word: any) => (
              <Card
                key={word.word}
                word={word.word}
                translation={word.translation}
                image={word.image}
                id={word.id}
              />
            ))}

          {words && words.length === 0 && (
            <div className={styles.not_found_words}>
              <p>Nenhuma palavra encontrada</p>
              <Link className="btn" to="/word/create">
                Criar
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
