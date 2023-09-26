import russian from "../images/russian.svg";
import english from "../images/english.svg";
function Header({
  onSwitchDarkTheme,
  isThemeDark,
  isDropdownActive,
  onClickDropdown,
  isEnlishVersion,
  onClickEnglishBtn,
}) {
  const handleClickEnglishBtn = () => {
    onClickEnglishBtn();
    onClickDropdown();
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="toggle">
          <input
            type="checkbox"
            id="toggle_checkbox"
            onChange={onSwitchDarkTheme}
          />
          <label htmlFor="toggle_checkbox">
            <div id="star">
              <div className="star" id="star-1">
                ★
              </div>
              <div className="star" id="star-2">
                ★
              </div>
            </div>
            <div id="moon"></div>
          </label>
        </div>
        <div className="dropdown">
          <button className="dropdown__btn" onClick={onClickDropdown}>
            <img
              src={isEnlishVersion ? english : russian}
              alt={isEnlishVersion ? "Flag Great Britain" : "Флаг РФ"}
              className="dropdown__img"
            />
            <span className="dropdown__text">{`${
              isEnlishVersion ? "EN" : "RU"
            }`}</span>
            <svg
              className={`dropdown__arrow ${
                isThemeDark ? "dropdown__arrow_white" : ""
              }`}
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              transform={`${isDropdownActive ? "rotate(180)" : "rotate(0)"}`}
            >
              <path
                clipRule="evenodd"
                d="M4.64645 7.64645C4.84171 7.45118 5.15829 7.45118 5.35355 7.64645L12 14.2929L18.6464 7.64645C18.8417 7.45118 19.1583 7.45118 19.3536 7.64645C19.5488 7.84171 19.5488 8.15829 19.3536 8.35355L12.3536 15.3536C12.1583 15.5488 11.8417 15.5488 11.6464 15.3536L4.64645 8.35355C4.45118 8.15829 4.45118 7.84171 4.64645 7.64645Z"
                fill="black"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <ul
            className={`dorpdown__list ${
              isDropdownActive ? "dorpdown__list_active" : ""
            }`}
          >
            <li>
              <button className="dropdown__btn" onClick={handleClickEnglishBtn}>
                <img
                  src={isEnlishVersion ? russian : english}
                  alt={
                    isEnlishVersion
                      ? "Flag RF"
                      : "Флаг Великобритании"
                  }
                  className="dropdown__img"
                />
                <span className="dropdown__lang-caption">{`${
                  isEnlishVersion ? "RU" : "EN"
                }`}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
