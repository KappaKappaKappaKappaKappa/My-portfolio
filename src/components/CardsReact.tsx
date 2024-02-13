import cardLinkViewImg from "../images/card-link.svg";
import cardLinkCodeImd from "../images/linkCodeImg.svg";
import CardsReactInfo from "../configs/cardsReact.config";
import React from "react";

interface CardsReactProps {
  isEnlishVersion: boolean;
}

const CardsReact: React.FC<CardsReactProps> = ({ isEnlishVersion }) => {
  return (
    <>
      {CardsReactInfo.map((card, index) => {
        return (
          <article className="card" key={index}>
            <figure className="card__img-container">
              <img
                className="card__img"
                src={card.img}
                alt="Скриншот главной страницы проекта"
              />
            </figure>
            <div className="cards">
              <div className="card__info-container">
                <h3 className="card__title">{card.title}</h3>
                <p className="card__description">{card.description}</p>
                <h4 className="card__stack-list-title">
                  {isEnlishVersion ? "Stack:" : "Стек:"}
                </h4>
                <ul className="card__stack-list">
                  {card.stack.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
                <div className="card__links">
                  {card.site && (
                    <a
                      className="card__link"
                      href={card.site}
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
                  )}

                  <a
                    className="card__link"
                    href={card.githubLinks}
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
            </div>
          </article>
        );
      })}
    </>
  );
};

export default CardsReact;
