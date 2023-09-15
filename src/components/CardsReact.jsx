import mestoImg from "../images/mesto.png";
import cardLinkViewImg from "../images/card-link.svg";
import cardLinkCodeImd from "../images/linkCodeImg.svg";

function CardsReact({ isEnlishVersion }) {
  return (
    <article className="card">
      <figure className="card__img-container">
        <img
          className="card__img"
          src={mestoImg}
          alt="Скриншот главной страницы проекта"
        />
      </figure>
      <div className="card__info-container">
        <h3 className="card__title">
          {isEnlishVersion ? "Project Place" : "Проект Место"}
        </h3>
        <p className="card__description">
          {isEnlishVersion
            ? "Web page for storing user cards with the ability register, log in, add and delete cards, like, change profile data and avatar."
            : "Веб-страница-хранилище карточек пользователей с возможность регистрироваться, авторизовываться, добавлять и удалять карточки, ставить лайки, менять данные профиля и аватар."}
        </p>
        <h4 className="card__stack-list-title">
          {isEnlishVersion ? "Stack:" : "Стек:"}
        </h4>
        <ul className="card__stack-list">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Java Scrips</li>
          <li>React</li>
        </ul>
        <div className="card__links">
          <a
            className="card__link"
            href="https://kappakappakappakappakappa.github.io/react-mesto-auth/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="card__link-img"
              src={cardLinkViewImg}
              alt={isEnlishVersion ? "Icon link" : "Иконка ссылки"}
            />
            <span className="card__link-title">
              {isEnlishVersion ? "Watch live" : "Посмотреть вживую"}
            </span>
          </a>

          <a
            className="card__link"
            href="https://github.com/KappaKappaKappaKappaKappa/react-mesto-auth.git"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              className="card__link-img"
              src={cardLinkCodeImd}
              alt={isEnlishVersion ? "Icon GitHub" : "Иконка GitHub"}
            />
            <span className="card__link-title">
              {isEnlishVersion ? "Watch code" : "Посмотреть код"}
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default CardsReact;
