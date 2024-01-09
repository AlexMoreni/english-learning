import styles from "./CreateWord.module.css";

import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useInsertDocument } from "../../hooks/useInsertDocument";

export function CreateWord({ user }: any) {
  const [word, setWord] = useState<string>("");
  const [translation, setTranslation] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [formError, setFormError] = useState<null | string>(null);

  const { insertDocument, response } = useInsertDocument("words");

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");

    //validate image url
    try {
      new URL(image);
    } catch (error) {
      setFormError("The image must be a URL");
    }

    if (!word || !translation || !image) {
      setFormError("Fill in all fields");
    }

    if (formError) return;

    insertDocument({
      word,
      translation,
      image,
      uid: user.uid,
      createdBy: user.displayName,
    });

    navigate("/dictionary");
  };

  return (
    <div className={styles.create_word}>
      <h2>Criar palavras</h2>
      <p>Adicione uma nova palavra ao seu dicionário</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Palvra:</span>
          <input
            type="text"
            name="word"
            required
            placeholder="Qual é a palavra"
            onChange={(e) => setWord(e.target.value)}
            value={word}
            autoComplete="off"
          />
        </label>
        <label>
          <span>Tradução:</span>
          <input
            type="text"
            name="translation"
            required
            placeholder="Qual é a tradução"
            onChange={(e) => setTranslation(e.target.value)}
            value={translation}
            autoComplete="off"
          />
        </label>
        <label>
          <span>URL imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            autoComplete="off"
          />
        </label>
        {!response.loading && <button className="btn">Salvar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Carregando...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
