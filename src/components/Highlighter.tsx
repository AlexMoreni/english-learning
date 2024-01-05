import styles from "./Highlighter.module.css";

import { useDeleteDocument } from "../hooks/useDeleteDocument";

interface HighlighterData {
  title: string;
  text: string;
  id: string;
  setModalOn: any;
  setTitle: any;
  setNote: any;
  setModeReading: any;
}

export function Highlighter({
  title,
  text,
  id,
  setModalOn,
  setTitle,
  setNote,
  setModeReading,
}: HighlighterData) {
  const { deleteDocument } = useDeleteDocument("notes");

  return (
    <div
      className={styles.highlighter}
      onClick={() => {
        setModalOn(true);
        setTitle(title);
        setNote(text);
        setModeReading(true);
      }}
    >
      <h2>{title}</h2>
      <p>{text.slice(0, 15)}...</p>
      <button
        className={styles.deleteHighlighter}
        onClick={(e) => {
          deleteDocument(id);
          e.stopPropagation();
        }}
      >
        X
      </button>
    </div>
  );
}
