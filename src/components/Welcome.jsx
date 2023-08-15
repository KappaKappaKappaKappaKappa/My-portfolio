import developer from "../images/developer.gif";
function Welcome() {
  return (
    <section className="welcome">
      <div className="welcome__text-container">
        <h2 className="welcome__title">Привет, я Влад!</h2>
        <p className="welcome__subtitle">Рад знакомству</p>
      </div>
      <figure className="welcome__img-container">
        <img className="welcome__img" src={developer} alt="" />
      </figure>
    </section>
  );
}

export default Welcome;
