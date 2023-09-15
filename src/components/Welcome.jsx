import developer from "../images/developer.gif";
import developerNigth from "../images/developer-nigth.gif";
function Welcome({ isThemeDark, isEnlishVersion }) {
  return (
    <section className="welcome">
      <div className="welcome__text-container">
        <h2 className="welcome__title">
          {isEnlishVersion ? "Hello, I'm Vlad!" : "Привет, я Влад!"}
        </h2>
        <p className="welcome__subtitle">
          {isEnlishVersion ? "Nice to meet you" : "Рад знакомству"}
        </p>
      </div>
      <figure className="welcome__img-container">
        <img
          className="welcome__img"
          src={isThemeDark ? developerNigth : developer}
          alt={isEnlishVersion ? "GIF with the developer" : "Гифка с разработчиком"}
        />
      </figure>
    </section>
  );
}

export default Welcome;
