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

  // <article className="place">
  //   <img className="place__img" src={logoLink} alt={logoAlt} />
  //   <div className="place__container">
  //     <h3 className="place__title">
  //      {}
  //     </h3>
  //     <p className="place__info">
  //       {isEnlishVersion
  //         ? "Training in Yandex Practicum"
  //         : "Обучение в Яндекс Практикум"}
  //     </p>
  //     <p className="place__time">
  //       {isEnlishVersion
  //         ? "February 2023 - November 2023"
  //         : "Февраль 2023 - Ноябрь 2023"}
  //     </p>
  //     <p className="place__location">
  //       {isEnlishVersion ? "Russia, Moscow" : "Россия, Москва"}
  //     </p>
  //     <ul className="place__list">
  //       <li className="place__list-item">
  //         {isEnlishVersion
  //           ? "- Study of theoretical information;"
  //           : "- Изучение теоритической информации;"}
  //       </li>
  //       <li className="place__list-item">
  //         {isEnlishVersion
  //           ? "- Practical application of acquired skills;"
  //           : "- Практическое применение полученных навыков;"}
  //       </li>
  //       <li className="place__list-item">
  //         {isEnlishVersion
  //           ? "- Development of educational projects;"
  //           : "- Разработка учебных проектов;"}
  //       </li>
  //     </ul>
  //     <h4 className="place__list-title">
  //       {isEnlishVersion ? "Achievements:" : "Достижения:"}
  //     </h4>
  //     <ul className="place__list">
  //       <li className="place__list-item">
  //         {isEnlishVersion
  //           ? "- Created 3 large projects using modern technology;"
  //           : "- Создал 3 больших проекта с использованием современных технологий;"}
  //       </li>
  //       <li className="place__list-item">
  //         {isEnlishVersion
  //           ? "- I create pet projects based on the knowledge gained;"
  //           : "- Создаю pet-проекты на основе полученных знаний;"}
  //       </li>
  //       <li className="place__list-item">
  //         {isEnlishVersion
  //           ? "- Learned how to create adaptive web applications and work with layout;"
  //           : "- Научился создавать адаптивные веб приложения и работать с макетом;"}
  //       </li>
  //       <li className="place__list-item">
  //         {isEnlishVersion
  //           ? "- Learned a lot of new things and learned to apply the acquired knowledge in practice;"
  //           : "- Узнал очень много нового и научился применять полученные знания на практике;"}
  //       </li>
  //     </ul>
  //     <h4 className="place__list-title">
  //       {isEnlishVersion ? "Technology stack:" : "Стек технологий:"}
  //     </h4>
  //     <ul className="place__list">
  //       <li className="place__list-item">• HTML 5</li>
  //       <li className="place__list-item">• CSS 3</li>
  //       <li className="place__list-item">• JS</li>
  //       <li className="place__list-item">• React</li>
  //       <li className="place__list-item">• JSX</li>
  //       <li className="place__list-item">• Node.js</li>
  //       <li className="place__list-item">• Express.js</li>
  //     </ul>
  //     <h4 className="place__list-title">
  //       {isEnlishVersion ? "Tools:" : "Инструменты:"}
  //     </h4>
  //     <ul className="place__list">
  //       <li className="place__list-item">• Visual Studio Code</li>
  //       <li className="place__list-item">• Webpack</li>
  //       <li className="place__list-item">• Figma</li>
  //       <li className="place__list-item">• Parcel</li>
  //       <li className="place__list-item">
  //         {isEnlishVersion ? "• BEM methodology" : "• Методология БЭМ"}
  //       </li>
  //       <li className="place__list-item">• MongoDB</li>
  //     </ul>
  //   </div>
  // </article>
};

export default PracticeArticle;
