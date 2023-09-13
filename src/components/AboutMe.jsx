function AboutMe({ isThemeDark }) {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">Обо мне</h2>
        <div className="about-me__text-container">
          <p className="about-me__text">
            🙋‍♂️💻 Мне 21 год и я начинающий Frontend-разработчик из Москвы, ищу
            интересные задачи и заинтересован в развитии
          </p>
          <p className="about-me__text">
            🖥️ Пришел в разработку потому мне интересно узнавать и создавать
            что-то новое, улучшая пользовательский опыт
          </p>
          <p className="about-me__text">
            📚 Обучаюсь на платформе{" "}
            <a
              className={`${
                isThemeDark
                  ? "about-me__link about-me__link_white"
                  : "about-me__link"
              }`}
              href="https://practicum.yandex.ru/"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс Практикум (Web-разработка)
            </a>
            , параллельно изучаю интересные технологии и делаю pet-проекты, в
            активном поиске работы
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
