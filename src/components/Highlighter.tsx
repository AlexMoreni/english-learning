import styles from "./Highlighter.module.css";

import { useDeleteDocument } from "../hooks/useDeleteDocument";

interface HighlighterData {
  title: string;
  text: string;
  id: string;
}

export function Highlighter({ title, text, id }: HighlighterData) {
  const { deleteDocument } = useDeleteDocument("notes");

  return (
    <div className={styles.highlighter}>
      <h2>{title}</h2>
      <p>{text.slice(0, 15)}...</p>
      <button
        className={styles.deleteHighlighter}
        onClick={() => deleteDocument(id)}
      >
        X
      </button>
    </div>
  );
}
