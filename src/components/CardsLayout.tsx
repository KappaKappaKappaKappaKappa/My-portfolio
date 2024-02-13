import cardLinkViewImg from "../images/card-link.svg";
import React from "react";
import CardsLatoutInfo from "../configs/cardsLayout";

interface CardsLayoutProps {
  isEnlishVersion: boolean;
}

const CardsLayout: React.FC<CardsLayoutProps> = ({ isEnlishVersion }) => {
  return (
    <>
      {CardsLatoutInfo.map((card, index) => {
        return (
          <article className="card" key={index}>
            <figure className="card__img-container">
              <img
                className="card__img"
                src={card.img}
                alt="Скриншот главной страницы проекта"
              />
            </figure>
            <div className="card__info-container">
              <h3 className="card__title">{card.title}</h3>
              <p className="card__description">{card.description}</p>
              <div className="card__links">
                <a
                  className="card__link"
                  href={card.githubLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    className="card__link-img"
                    src={cardLinkViewImg}
                    alt="Иконка ссылки"
                  />
                  <span className="card__link-title">Посмотреть вживую</span>
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default CardsLayout;
