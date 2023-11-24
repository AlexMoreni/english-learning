import style from "./Explore.module.css";
import { CardExplore } from "../../components/CardExplore";

export function Explore() {
  return (
    <div className={style.explore}>
      <section>
        <h1>Livros</h1>
        <div>
          <CardExplore
            name="Inglês para viagem"
            image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuAb0CGJv0-sUTp6wqHd9M8_UKQT4iIf9kmvoe_9zBLYB7-gQu7zxg4AXJeRo-w9VWr24QjWJ4-pD6TRHBgD49OAyvMND_QBKpOZBY5YsVUqsxR41OgtJr&usqp=CAE"
            link="https://www.amazon.com.br/INGL%C3%8AS-PARA-VIAGEM-SOBREVIV%C3%8ANCIA-ATIVIDADES/dp/658113614X?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1X6I9A8LS2X8V"
          />
          <CardExplore
            name="Inglês em 50 aulas"
            image="https://m.media-amazon.com/images/I/51KZNMVqIGS._SY425_.jpg"
            link="https://www.amazon.com.br/Ingl%C3%AAs-50-Aulas-definitivo-aprender/dp/8550802824"
          />
          <CardExplore
            name="English Idioms in Use"
            image="https://m.media-amazon.com/images/I/51IH3anyryL._AC_UF1000,1000_QL80_.jpg"
            link="https://www.amazon.com.br/English-Idioms-Advanced-Book-Answers/dp/1316629732"
          />
          <CardExplore
            name="Inglês Como Um Nativo"
            image="https://m.media-amazon.com/images/I/51R32z1rPvL.jpg"
            link="https://www.amazon.com.br/Inglês-Como-Nativo-Aprenda-Rápido-ebook/dp/B082J3ZK7F"
          />
        </div>
      </section>
      <section>
        <h1>Cursos</h1>
        <div>
          <CardExplore
            name="Mairo Vergara"
            image="https://cdns-images.dzcdn.net/images/talk/b32f791701e53dd5a1f86c6499029450/500x500.jpg"
            link="https://curso.mairovergara.com/cadastro-gratuito/ingles-gratuito?utm_source=google_search&utm_content=curso%20ingles%20basico&gad_source=1&gclid=CjwKCAiAsIGrBhAAEiwAEzMlC6QGX7Zdgi7w5xRf-pyZTBLJsqjNAdlrtN6XdtzGmrUW3NQ26LN4VxoC9l8QAvD_BwE"
          />
          <CardExplore
            name="Wizard"
            image="https://www.wizard.com.br/wp-content/themes/wizardtheme/assets/imgs/img-padrao.webp"
            link="https://www.wizard.com.br/cursos/ingles/"
          />
          <CardExplore
            name="Open english"
            image="https://genteseguradora.com.br/wp-content/uploads/open-english-1200x800-1.jpg"
            link="https://www.openenglish.com.br/curso/"
          />
          <CardExplore
            name="CCAA"
            image="https://yt3.googleusercontent.com/5RYCNxdzPXoeCc6xPePqNH8DAZcRdvUR6XnKAsxdo1-IudGBR5p-gyiR9Y-BbvxB6K4MJcVu1A=s900-c-k-c0x00ffffff-no-rj"
            link="https://www.ccaa.com.br/cursos/ingles/"
          />
        </div>
      </section>
      <section>
        <h1>Vídeos</h1>
        <div>
          <CardExplore
            name="Derek Poliglot"
            image="https://i.ytimg.com/vi/8wx6MUDIT4I/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDZXpgyg-yG3dgcsbxNWqFzSb0ssQ"
            link="https://www.youtube.com/watch?v=8wx6MUDIT4I&pp=ygUUMTAwMCBmcmFzZSBlbSBpbmdsZXM%3D"
          />
          <CardExplore
            name="Matheus Werner Jerke"
            image="https://yt3.googleusercontent.com/_OlXgfnl6tA0aeX3DYKxQtRQT7dQya0VMJQXiNt-vWDNQQ2iQn8QpeK7-CIHOZIRoZXbD2s_NA=s900-c-k-c0x00ffffff-no-rj"
            link="https://www.youtube.com/watch?v=qi8jkMBhRoI"
          />
          <CardExplore
            name="ABC Fluent"
            image="https://yt3.googleusercontent.com/AG3QhFLMF2MxAkjW2Ju4dYhPlY1fYwmOTClk1SddEmKkU1rWrX2Qr5f7wNEjU9s_sYIUxQne=s900-c-k-c0x00ffffff-no-rj"
            link="https://youtube.com/playlist?list=PLxJY3neuatlrhpLKDWOYQgQ3XPBWV-D_K&si=KVlqgfustgZlX6WD"
          />
          <CardExplore
            name="Teacher Murilo"
            image="https://yt3.googleusercontent.com/QAbglabNYuy3fyKyBzBXzrFvs54gS-MLQB5Y8Y6BZSP52S5bo8qRabcaFktzQu-sBwqcYIMi7w=s900-c-k-c0x00ffffff-no-rj"
            link="https://www.youtube.com/watch?v=2q6fOlgRmh0"
          />
        </div>
      </section>
    </div>
  );
}
