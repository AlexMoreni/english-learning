import styles from "./Highlighter.module.css";

interface HighlighterData {
  title: string;
  text: string;
}

export function Highlighter({ title, text }: HighlighterData) {
  return (
    <div className={styles.highlighter}>
      <h2>{title}</h2>
      <p>{text.slice(0, 15)}...</p>
      <button className={styles.deleteHighlighter}>X</button>
    </div>
  );
}
