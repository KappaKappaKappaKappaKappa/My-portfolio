import cardLinkViewImg from "../images/card-link.svg";
import russianTravelImg from "../images/russianTravelImg.png";
import howToLearnImg from "../images/howToLearnImg.png";
import testJobImg from "../images/test-job-img.png";

function CardsLayout({ isEnlishVersion }) {
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
          <h3 className="card__title">
            {isEnlishVersion
              ? "Project Travel to Russia"
              : "Проект Путешествия по России"}
          </h3>
          <p className="card__description">
            {isEnlishVersion
              ? "A project about traveling in Russia. A one-page website with an adaptive design made up according to the layout."
              : "Проект о путешествии по России. Одностраничный сайт с адаптивным дизайном свёрстанный по макету."}
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
                alt={isEnlishVersion ? "Icon link" : "Иконка ссылки"}
              />
              <span className="card__link-title">
                {isEnlishVersion ? "Watch live" : "Посмотреть вживую"}
              </span>
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
          <h3 className="card__title">
            {isEnlishVersion
              ? "Project How to Learn"
              : "Проект Научиться учиться"}
          </h3>
          <p className="card__description">
            {isEnlishVersion
              ? "A simple one-page website written in HTML and CSS using CSS animation."
              : "Простой одностаничный сайт написанный на HTML и CSS с использованием CSS-анимаций."}
          </p>
          <div className="card__links">
            <a
              className="card__link"
              href="https://kappakappakappakappakappa.github.io/how-to-learn/"
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
          </div>
        </div>
      </article>

      <article className="card">
        <figure className="card__img-container">
          <img
            className="card__img"
            src={testJobImg}
            alt="Скриншот главной страницы проекта"
          />
        </figure>
        <div className="card__info-container">
          <h3 className="card__title">
            {isEnlishVersion ? "Landing page" : "Лендинг страница"}
          </h3>
          <p className="card__description">
            {isEnlishVersion
              ? "Test task from amoCRM company. Landing page for screen resolutions: 1440px and 320px"
              : "Тестовое задание от компании amoCRM. Лендинг страница для разрешений экрана: 1440px и 320px"}
          </p>
          <div className="card__links">
            <a
              className="card__link"
              href="https://kappakappakappakappakappa.github.io/test-job/"
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
          </div>
        </div>
      </article>
    </>
  );
}

export default CardsLayout;
