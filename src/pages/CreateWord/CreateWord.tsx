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

    navigate("/");
  };

  return (
    <div className={styles.create_word}>
      <h2>Create Word</h2>
      <p>Add a new word to your dictionary</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Word:</span>
          <input
            type="text"
            name="word"
            required
            placeholder="What's the word?"
            onChange={(e) => setWord(e.target.value)}
            value={word}
          />
        </label>
        <label>
          <span>Translation:</span>
          <input
            type="text"
            name="translation"
            required
            placeholder="Insira uma imagem"
            onChange={(e) => setTranslation(e.target.value)}
            value={translation}
          />
        </label>
        <label>
          <span>URL image:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insert the image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        {!response.loading && <button className="btn">Save</button>}
        {response.loading && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
}
