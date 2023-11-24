import style from "./CardExplore.module.css";

interface ContentCard {
  name: string;
  image: string;
  link: string;
}

export function CardExplore({ name, image, link }: ContentCard) {
  return (
    <a href={link} target="_blank" className={style.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </a>
  );
}
