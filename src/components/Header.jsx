import russian from "../images/russian.svg";
import dropdownArrow from "../images/dropdown-arrow.svg";
function Header({ onSwitchTheme }) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="toggle">
          <input
            type="checkbox"
            id="toggle_checkbox"
            onChange={onSwitchTheme}
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
          <button className="dropdown__btn">
            <img src={russian} alt="#" className="dropdown__img" />
            <p className="dropdown__text">RU</p>
            <img src={dropdownArrow} alt="#" className="dropdown__arrow" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
