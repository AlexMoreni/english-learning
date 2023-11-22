import { useState, useEffect } from "react";
import styles from "./Card.module.css";

import { AiFillSound } from "react-icons/ai";

import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

import { FaRegTrashAlt } from "react-icons/fa";

interface CardData {
  word: string;
  translation: string;
  image: string;
}

export function Card({ word, translation, image }: CardData) {
  const [voice, setVoice] = useState<any>(null);
  const [showWord, setShowWord] = useState<boolean>(false);

  const repeatString = (qty: number) => {
    return "*".repeat(qty);
  };

  const speak = (word: string) => {
    const utterance = new SpeechSynthesisUtterance();

    utterance.text = word;
    utterance.lang = "en-US";
    utterance.voice = voice;
    utterance.rate = 0.8;

    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    const voices = window.speechSynthesis?.getVoices();
    const enVoice = voices?.find((voice) => /en-US/.test(voice.lang));

    setVoice(enVoice || voices?.[0]);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <img src={image} alt={word} />
        <h3>{word}</h3>
        {showWord ? (
          <p>{translation}</p>
        ) : (
          <p>{repeatString(translation.length)}</p>
        )}
      </div>
      <div className={styles.options}>
        <AiFillSound onClick={() => speak(word)} />
        {showWord ? (
          <IoIosEye onClick={() => setShowWord(false)} />
        ) : (
          <IoIosEyeOff onClick={() => setShowWord(true)} />
        )}
        <FaRegTrashAlt className={styles.trash} />
      </div>
    </div>
  );
}
