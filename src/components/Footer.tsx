import footerGitImg from "../images/footer-github-img.svg";
import footerTelegramImg from "../images/footer-telegram-img.svg";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <ul className="footer-list">
          <li className="footer-list__item">
            <a
              href="https://github.com/KappaKappaKappaKappaKappa"
              className="footer-list__item-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer-list__item-img"
                src={footerGitImg}
                alt="Значок Github"
              />
              <span className="footer-list__item-text">GitHub</span>
            </a>
          </li>

          <li className="footer-list__item">
            <a
              href="https://t.me/lopooooop"
              className="footer-list__item-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="footer-list__item-img"
                src={footerTelegramImg}
                alt="Значок Telegram"
              />
              <span className="footer-list__item-text">Telegram</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
