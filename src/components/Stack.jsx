import html from "../images/html.svg";
import css from "../images/css.svg";
import git from "../images/git.svg";
import js from "../images/js.svg";
import react from "../images/react.svg";
import reactRouter from "../images/react-router.svg";
import vsCode from "../images/vscode.svg";
import webpack from "../images/webpack.svg";
import jsx from "../images/jsx.png";
import mongodb from "../images/mongodb-icon.svg";
import express from "../images/expressjs-icon.svg";
import node from "../images/nodejs-icon.svg";

function Stack() {
  return (
    <section className="stack">
      <h2 className="stack__title">Мой стек</h2>
      <ul className="stack__list">
        <li className="stack__list-item">
          <img className="stack__img" src={html} alt="Иконка html" />
          <span>HTML5</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={css} alt="Иконка css" />
          <span>CSS3</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={js} alt="Иконка js" />
          <span>JavaScript</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={react} alt="Иконка react" />
          <span>React</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={reactRouter}
            alt="Иконка reactRouter"
          />
          <span>React Router</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={jsx} alt="Иконка jsx" />
          <span>JSX</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={express} alt="Иконка express" />
          <span>Express</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={node} alt="Иконка node" />
          <span>Node.js</span>
        </li>
      </ul>
      <h3 className="stack__subtitle">Инструменты и прочее:</h3>
      <ul className="stack__list">
        <li className="stack__list-item">
          <img className="stack__img" src={vsCode} alt="Иконка vsCode" />
          <span>Visual Studio Code</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={webpack} alt="Иконка webpack" />
          <span>Webpack</span>
        </li>
        <li className="stack__list-item">
          <img className="stack__img" src={git} alt="Иконка git" />
          <span>Git</span>
        </li>

        <li className="stack__list-item">
          <img className="stack__img" src={mongodb} alt="Иконка mongodb" />
          <span>MongoDB</span>
        </li>
      </ul>
    </section>
  );
}

export default Stack;
