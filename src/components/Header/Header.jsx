import "../styles/header.less";
import logo from "../../icon/logo.svg";
import user from "../../icon/user.svg";
import burger from "../../icon/burger.svg";
import bag from "../../icon/bag.svg";
import favorite from "../../icon/favorite.svg";

export const Header = () => {
  return (
    <header className="header container-fluid">
      <div className="header__container row text-left">
        <div className="header__logo col-xs-5  ">
          <img src={logo} alt="logo" />
        </div>

        <nav
          className="header__container__icons col-xs-7 text-right"
          aria-label="User menu"
        >
          <ul className="header__icons__list list-unstyled">
            <li>
              <a href="#" aria-label="User profile">
                <img src={user} alt="User-icon" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Favorites">
                <img src={favorite} alt="Favorites-icon" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Shopping bag">
                <img src={bag} alt="bag-icon" />
              </a>
            </li>
            <li>
              <button aria-label="Open menu">
                <img src={burger} alt="menu-icon" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
