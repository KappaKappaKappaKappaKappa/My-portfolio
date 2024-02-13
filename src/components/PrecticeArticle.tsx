import React from "react";
import PlacesInfo from "../configs/practice.config";

const PracticeArticle: React.FC = () => {
  return PlacesInfo.map((practiceInfo, index) => {
    return (
      <article key={index} className="place">
        <img
          className="place__img"
          src={practiceInfo.logoLink}
          alt={practiceInfo.logoAlt}
        />
        <div className="place__container">
          <h3 className="place__title">{practiceInfo.namePlace}</h3>
          <p className="place__info">{practiceInfo.task}</p>
          <p className="place__time">{practiceInfo.period}</p>
          <p className="place__location">{practiceInfo.location}</p>
          <ul key={index} className="place__list">
            {practiceInfo.tasks.map((task, index) => {
              return (
                <li className="place__list-item" key={index}>
                  {task}
                </li>
              );
            })}
          </ul>

          <h4 className="place__list-title">Достижения:</h4>
          <ul className="place__list">
            {practiceInfo.achievements.map((achievement, index) => {
              return (
                <li className="place__list-item" key={index}>
                  {achievement}
                </li>
              );
            })}
          </ul>

          <h4 className="place__list-title">Стек технологий:</h4>
          <ul className="place__list">
            {practiceInfo.stack.map((item, index) => {
              return (
                <li className="place__list-item" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
          <h4 className="place__list-title">Инструменты:</h4>
          <ul className="place__list">
            {practiceInfo.instruments.map((item, index) => {
              return (
                <li className="place__list-item" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    );
  });
};

export default PracticeArticle;
