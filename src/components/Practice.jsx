import logoPracticum from "../images/logoPracticum.jpg";
function Practice() {
  return (
    <section className="practice">
      <h2 className="practice__title">Опыт разработки</h2>
      <div className="place">
        <img
          className="place__img"
          src={logoPracticum}
          alt="Логотип Яндекс Практикум"
        />
        <div className="place__container">
          <h3 className="place__title">Веб-разработчик</h3>
          <p className="place__info">Обучение в Яндекс.Практикум</p>
          <p className="place__time">Февраль 2023 - по настоящее время</p>
          <p className="place__location">Россия, Москва</p>
          <ul className="place__list">
            <li className="place__list-item">
              - Изучение теоритической информации;
            </li>
            <li className="place__list-item">
              - Практическое применение полученных навыков.
            </li>
            <li className="place__list-item">- Разработка учебных проектов;</li>
          </ul>
          <h4 className="place__list-title">Достижения:</h4>
          <ul className="place__list">
            <li className="place__list-item">
              - Создал 3 больших проекта с использованием современных
              технологий;
            </li>
            <li className="place__list-item">
              - Создаю pet-проекты на основе полученных знаний;
            </li>
            <li className="place__list-item">
              - Научился создавать адаптивные веб приложения и работать с
              макетом;
            </li>
            <li className="place__list-item">
              - Узнал очень много нового и научился применять полученные знания
              на практике
            </li>
          </ul>
          <h4 className="place__list-title">Стек технологий:</h4>
          <ul className="place__list">
            <li className="place__list-item">• HTML 5</li>
            <li className="place__list-item">• CSS 3</li>
            <li className="place__list-item">• JS</li>
            <li className="place__list-item">• React</li>
            <li className="place__list-item">• JSX</li>
          </ul>
          <h4 className="place__list-title">Инструменты:</h4>
          <ul className="place__list">
            <li className="place__list-item">• Visual Studio Code</li>
            <li className="place__list-item">• Webpack</li>
            <li className="place__list-item">• Figma</li>
            <li className="place__list-item">• Parcel</li>
            <li className="place__list-item">• Методология БЭМ</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Practice;
