import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles.container_content}>
        <img src="illustrations-home.png" alt="" />
        <div>
          <h1>Effective English learning for any age</h1>
          <p>
            Flexible learning times and materials for all levels will have you
            speaking with confidence in no time.
          </p>
          <button>Get Started</button>
        </div>
      </div>
      <div
        className={styles.container_content}
        style={{ justifyContent: "space-around" }}
      >
        <div>
          <h1>Learn English for everyday situations</h1>
          <p>
            You will have a complete teaching experience, which will allow you
            to progress from scratch to fluency in English. With this content,
            you will feel confident to understand, speak well and be understood
            anywhere in the world.
          </p>
          <button>Start learning</button>
        </div>
        <img src="illustration-ads.png" alt="" />
      </div>
    </>
  );
}
