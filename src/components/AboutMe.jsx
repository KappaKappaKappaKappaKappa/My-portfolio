function AboutMe({ isThemeDark, isEnlishVersion }) {
  return (
    <section className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__title">
          {isEnlishVersion ? "About me" : "Обо мне"}
        </h2>
        <div className="about-me__text-container">
          <p className="about-me__text">
            {isEnlishVersion
              ? "🙋‍♂️💻 I’m 21 years old and I’m a beginner Frontend developer from Moscow, looking for interesting tasks and interested in development"
              : "🙋‍♂️💻 Мне 21 год и я начинающий Frontend-разработчик из Москвы, ищу интересные задачи и заинтересован в развитии"}
          </p>
          <p className="about-me__text">
            {isEnlishVersion
              ? "🖥️ I came to development because I am interested in learning and creating something new, improving the user experience."
              : "🖥️ Пришел в разработку потому что мне интересно узнавать и создавать что-то новое, улучшая пользовательский опыт"}
          </p>
          <p className="about-me__text">
            {isEnlishVersion
              ? "📚 I study on the platform "
              : "📚 Обучаюсь на платформе "}
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
              {isEnlishVersion
                ? "Yandex Practicum (Web-development)"
                : "Яндекс Практикум (Web-разработка)"}
            </a>
            {isEnlishVersion
              ? ", at the same time I am studying interesting technologies and doing pet projects, actively looking for work"
              : ", параллельно изучаю интересные технологии и делаю pet-проекты, в активном поиске работы"}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
