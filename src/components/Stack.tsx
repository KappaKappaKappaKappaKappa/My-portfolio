import html from "../images/stack/html.svg";
import css from "../images/stack/css.svg";
import js from "../images/stack/js.svg";
import react from "../images/stack/react.svg";
import jsx from "../images/stack/jsx.png";
import node from "../images/stack/nodejs-icon.svg";
import tailwind from "../images/stack/tailwind.svg";
import typeScript from "../images/stack/type-script.svg";
import nextjs from "../images/stack/nextjs.svg";
import sass from "../images/stack/sass.svg";
import materialui from "../images/stack/materialui.svg";
import redux from "../images/stack/redux.svg";
import reactRouter from "../images/instruments/react-router.svg";
import express from "../images/instruments/expressjs-icon.svg";
import webpack from "../images/instruments/webpack.svg";
import vsCode from "../images/instruments/vscode.svg";
import vite from "../images/instruments/vite.svg";
import mongodb from "../images/instruments/mongodb-icon.svg";
import git from "../images/instruments/git.svg";
import React from "react";

interface StackProps {
  isEnlishVersion: boolean;
}

const Stack: React.FC<StackProps> = ({ isEnlishVersion }) => {
  return (
    <section className="stack">
      <h2 className="stack__title">
        {isEnlishVersion ? "My stack" : "Мой стек"}
      </h2>
      <ul className="stack__list">
        <li className="stack__list-item">
          <img
            className="stack__img"
            src={html}
            alt={isEnlishVersion ? "Icon html" : "Иконка html"}
          />
          <span>HTML5</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={css}
            alt={isEnlishVersion ? "Icon css" : "Иконка css"}
          />
          <span>CSS3</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={js}
            alt={isEnlishVersion ? "Icon js" : "Иконка js"}
          />
          <span>JavaScript</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={typeScript}
            alt={isEnlishVersion ? "Icon Type Script" : "Иконка Type Script"}
          />
          <span>Type Script</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={nextjs}
            alt={isEnlishVersion ? "Icon nextjs" : "Иконка nextjs"}
          />
          <span>Next.js</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={react}
            alt={isEnlishVersion ? "Icon react" : "Иконка react"}
          />
          <span>React</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={reactRouter}
            alt={isEnlishVersion ? "Icon reactRouter" : "Иконка reactRouter"}
          />
          <span>React Router</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={jsx}
            alt={isEnlishVersion ? "Icon jsx" : "Иконка jsx"}
          />
          <span>JSX</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={express}
            alt={isEnlishVersion ? "Icon express" : "Иконка express"}
          />
          <span>Express.js</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={node}
            alt={isEnlishVersion ? "Icon node" : "Иконка node"}
          />
          <span>Node.js</span>
        </li>
        <li className="stack__list-item">
          <img
            className="stack__img"
            src={tailwind}
            alt={isEnlishVersion ? "Icon Tailwind" : "Иконка Tailwind"}
          />
          <span>Tailwind</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={sass}
            alt={isEnlishVersion ? "Icon sass" : "Иконка sass"}
          />
          <span>Sass</span>
        </li>
        <li className="stack__list-item">
          <img
            className="stack__img"
            src={materialui}
            alt={isEnlishVersion ? "Icon MaterialUI" : "Иконка MaterialUI"}
          />
          <span>Material-UI</span>
        </li>
        <li className="stack__list-item">
          <img
            className="stack__img"
            src={redux}
            alt={isEnlishVersion ? "Icon Redux" : "Иконка Redux"}
          />
          <span>Redux</span>
        </li>
      </ul>
      <h3 className="stack__subtitle">
        {isEnlishVersion ? "Tools and more:" : "Инструменты и прочее:"}
      </h3>
      <ul className="stack__list">
        <li className="stack__list-item">
          <img
            className="stack__img"
            src={vsCode}
            alt={isEnlishVersion ? "Icon vsCode" : "Иконка vsCode"}
          />
          <span>Visual Studio Code</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={webpack}
            alt={isEnlishVersion ? "Icon webpack" : "Иконка webpack"}
          />
          <span>Webpack</span>
        </li>
        <li className="stack__list-item">
          <img
            className="stack__img"
            src={git}
            alt={isEnlishVersion ? "Icon git" : "Иконка git"}
          />
          <span>Git</span>
        </li>

        <li className="stack__list-item">
          <img
            className="stack__img"
            src={mongodb}
            alt={isEnlishVersion ? "Icon mongodb" : "Иконка mongodb"}
          />
          <span>MongoDB</span>
        </li>
        <li className="stack__list-item">
          <img
            className="stack__img"
            src={vite}
            alt={isEnlishVersion ? "Icon vite" : "Иконка vite"}
          />
          <span>Vite</span>
        </li>
      </ul>
    </section>
  );
};

export default Stack;
