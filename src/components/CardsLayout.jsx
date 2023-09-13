import cardLinkViewImg from "../images/card-link.svg";
import russianTravelImg from "../images/russianTravelImg.png";
import howToLearnImg from "../images/howToLearnImg.png";

function CardsLayout() {
  return (
    <>
      <article className="card">
        <figure className="card__img-container">
          <img
            className="card__img"
            src={russianTravelImg}
            alt="Скриншот главной страницы проекта"
          />
        </figure>
        <div className="card__info-container">
          <h3 className="card__title">Проект Путешествия по России</h3>
          <p className="card__description">
            Проект о путешествии по России. Одностраничный сайт с адаптивным
            дизайном свёрстанный по макету.
          </p>
          <div className="card__links">
            <a
              className="card__link"
              href="https://kappakappakappakappakappa.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="card__link-img"
                src={cardLinkViewImg}
                alt="Иконка Github"
              />
              <span className="card__link-title">Посмотреть вживую</span>
            </a>
          </div>
        </div>
      </article>

      <article className="card">
        <figure className="card__img-container">
          <img
            className="card__img"
            src={howToLearnImg}
            alt="Скриншот главной страницы проекта"
          />
        </figure>
        <div className="card__info-container">
          <h3 className="card__title">Проект Научиться учиться</h3>
          <p className="card__description">
            Простой одностаничный сайт написанный на HTML и CSS с использованием
            CSS-анимаций.
          </p>
          <div className="card__links">
            <a className="card__link" href="#">
              <img
                className="card__link-img"
                src={cardLinkViewImg}
                alt="Иконка Github"
              />
              <span className="card__link-title">Посмотреть вживую</span>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default CardsLayout;
