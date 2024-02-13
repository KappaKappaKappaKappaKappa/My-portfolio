import mestoImg from "../images/projectsPreview/mesto.png";
import cardLinkViewImg from "../images/card-link.svg";
import cardLinkCodeImd from "../images/linkCodeImg.svg";
import moviesExplorerImg from "../images/projectsPreview/movies-explorer-img.png";
import React from "react";

interface CardsReactProps {
  isEnlishVersion: boolean;
}

const CardsReact: React.FC<CardsReactProps> = ({ isEnlishVersion }) => {
  return (
    <>
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
              ? "The Place service with its own API is a web page-a repository of user cards with the ability to register, log in, add and delete cards, put likes, change profile data and avatar."
              : "Сервис Место с собственным API представляющий собой веб-страницу-хранилище карточек пользователей с возможность регистрироваться, авторизовываться, добавлять и удалять карточки, ставить лайки, менять данные профиля и аватар."}
          </p>
          <h4 className="card__stack-list-title">
            {isEnlishVersion ? "Stack:" : "Стек:"}
          </h4>
          <ul className="card__stack-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Java Scrips</li>
            <li>React</li>
            <li>Express</li>
            <li>React Hooks</li>
            <li>API</li>
            <li>Cookies</li>
            <li>Custom Hooks</li>
          </ul>
          <div className="card__links">
            {/* <a
              className="card__link"
              href="https://project.mesto.nomoredomainsrocks.ru/"
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
            </a> */}

            <a
              className="card__link"
              href="https://github.com/KappaKappaKappaKappaKappa/react-mesto-api-full-gha"
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

      <article className="card">
        <figure className="card__img-container">
          <img
            className="card__img"
            src={moviesExplorerImg}
            alt="Скриншот главной страницы проекта"
          />
        </figure>
        <div className="card__info-container">
          <h3 className="card__title">
            {isEnlishVersion
              ? "Project Movies explorer"
              : "Проект Поисковик фильмов"}
          </h3>
          <p className="card__description">
            {isEnlishVersion
              ? "Movies Explorer is a site with its own and external API for searching and saving movies. User registration and authorization is possible. Based on the data, movies are searched and the results are determined. Movies can be added to Favorites, saved movies can be viewed and deleted from Favorites. There is filtering of films by timing."
              : "Movies Explorer - сайт с собственным и сторонним API для поиска и сохранения фильмов. Есть возможность регистрации и авторизации пользователя. Поиск фильмов производится по базе данных, результаты поиска сохраняются. Фильмы можно добавлять в 'избранное', сохранённые фильмы можно просматривать и удалять из 'избранных'. Присутствует фильтрация фильмов по хронометражу."}
          </p>
          <h4 className="card__stack-list-title">
            {isEnlishVersion ? "Stack:" : "Стек:"}
          </h4>
          <ul className="card__stack-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Java Scrips</li>
            <li>React</li>
            <li>React Hooks</li>
            <li>Express</li>
            <li>HOC</li>
            <li>Local Storage</li>
            <li>API</li>
            <li>Custom Hooks</li>
          </ul>
          <div className="card__links">
            {/* <a
              className="card__link"
              href="https://project.mesto.nomoredomainsrocks.ru/"
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
            </a> */}

            <a
              className="card__link"
              href="https://github.com/KappaKappaKappaKappaKappa/movies-explorer-frontend"
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
    </>
  );
};

export default CardsReact;
