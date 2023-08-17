import html from "../images/html.svg";
import css from "../images/css.svg";
import git from "../images/git.svg";
import js from "../images/js.svg";
import react from "../images/react.svg";
import reactRouter from "../images/react-router.svg";
import vsCode from "../images/vscode.svg";
import webpack from "../images/webpack.svg";
import jsx from "../images/jsx.png";

function Stack() {
  return (
    <section className="stack">
      <h2 className="stack__title">Мой стек</h2>
      <ul className="stack__list">
        <li className="stack__list-item">
          <img className="stack__img" src={html} alt="" />
          <span>HTML5</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={css} alt="" />
          <span>CSS3</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={js} alt="" />
          <span>JavaScript</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={react} alt="" />
          <span>React</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={reactRouter} alt="" />
          <span>React Router</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={jsx} alt="" />
          <span>JSX</span>
        </li>
      </ul>
      <h3 className="stack__subtitle">Инструменты и прочее:</h3>
      <ul className="stack__list">
        <li className="stack__list-item">
          <img className="stack__img" src={vsCode} alt="" />
          <span>Visual Studio Code</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={webpack} alt="" />
          <span>Webpack</span>
        </li>
        <li className="stack__list-item">
          <img className="stack__img" src={git} alt="" />
          <span>Git</span>
        </li>
      </ul>
    </section>
  );
}

export default Stack;
