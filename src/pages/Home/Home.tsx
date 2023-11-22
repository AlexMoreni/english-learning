import styles from "./Home.module.css";

export function Home() {
  return (
    <>
      <div className={styles.container_content}>
        <img src="illustrations-home.png" alt="" />
        <div>
          <h1>Aprendizagem eficaz de inglês para qualquer idade</h1>
          <p>
            Tempos de aprendizagem flexíveis e materiais para todos os níveis
            farão com que você fale com confiança rapidamente.
          </p>
          <button>Comece a aprender</button>
        </div>
      </div>
      <div
        className={styles.container_content}
        style={{ justifyContent: "space-around" }}
      >
        <div>
          <h1>Aprenda inglês para situações cotidianas</h1>
          <p>
            Você terá uma experiência de ensino completa, que lhe permitirá
            progredir do zero até a fluência em inglês. Com esse conteúdo você
            se sentirá confiante para entender, falar bem e ser compreendido em
            qualquer lugar do mundo.
          </p>
          <button>Comece a aprender</button>
        </div>
        <img src="illustration-ads.png" alt="" />
      </div>
    </>
  );
}
