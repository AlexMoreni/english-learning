import styles from "./Test.module.css";
import { useState } from "react";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";

import { Link } from "react-router-dom";

export function Test({ user }: any) {
  const [wordInput, setWordInput] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [resultPainel, setResultPainel] = useState<boolean>(false);
  const { documents: words } = useFetchDocuments("words", null, user.uid);

  function testWord() {
    if (
      wordInput.toLocaleLowerCase() === words[index].word.toLocaleLowerCase()
    ) {
      setPoints(points + 1);
    }

    if (index === words.length - 1) {
      setResultPainel(true);
      return;
    }

    setIndex(index + 1);
  }

  window.addEventListener("blur", () => {
    setIndex(index + 1);
  });

  return (
    <div>
      {words && words[index] ? (
        <>
          <div className={styles.header}>
            <h2 style={{ color: "#8179ec" }}>Teste seu conhecimento</h2>
            <p>
              <span style={{ fontWeight: "bold" }}>Você conhece:</span>{" "}
              {words.length} palavras
            </p>
            {index > 0 && (
              <p>
                <span style={{ fontWeight: "bold" }}>Respondidas:</span>{" "}
                {resultPainel ? index + 1 : index}/{words.length}
              </p>
            )}
          </div>
          {words[index] && (
            <div
              key={words[index].word}
              id={words[index].id}
              className={styles.cardTest}
            >
              <div className={styles.content}>
                <img src={words[index].image} alt="" />
                <p>
                  <span>Palavra:</span> {words[index].translation}
                </p>
                <input
                  type="text"
                  className={styles.inputTest}
                  onChange={(e) => setWordInput(e.target.value)}
                />
              </div>
              {!resultPainel && (
                <button className={styles.btnTest} onClick={() => testWord()}>
                  Corrigir
                </button>
              )}
            </div>
          )}
          {resultPainel && (
            <div className={styles.resultPainel}>
              <h1>Acabou seu teste!</h1>
              <p>
                Você acertou: {points}/{words.length}
              </p>
              <p>
                Porcentagem de acerto:{" "}
                {((points / words.length) * 100).toFixed(2)}%
              </p>
              <Link to="/dashboard" className={styles.btnBack}>
                Voltar
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className={styles.wordNotFound}>
          <h1>Você ainda não tem palavras!</h1>
          <p>
            Você não consegue realizar o teste pois não tem palavras no seu
            dicionário.
          </p>
          <div>
            <Link to="/dashboard" className={styles.btnBack}>
              Voltar
            </Link>

            <Link
              to="/dictionary"
              className={styles.btnBack}
              style={{ background: "#242730" }}
            >
              Adicionar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
