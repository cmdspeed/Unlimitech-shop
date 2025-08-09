import "../styles/header.less";
import logo from "../../icon/logo.svg";
import user from "../../icon/user.svg";
import burger from "../../icon/burger.svg";
import bag from "../../icon/bag.svg";
import favorite from "../../icon/favorite.svg";
import search from "../../icon/search.svg";

export const Header = () => {
  return (
    <header className="header container-fluid">
      <div className="header__container row text-left">
        <div className="header__logo col-5 align-content-center">
          <img src={logo} alt="logo" />
        </div>

        <nav
          className="header__container__icons col-7 text-right"
          aria-label="User menu"
        >
          <ul className="header__icons__list list-unstyled d-flex justify-content-end align-items-center mb-0">
            <li className="rounded-circle justify-content-center border p-1">
              <div className="header__icon rounded-circle p-2 d-flex align-items-center">
                <a href="#" aria-label="User profile">
                  <img src={user} alt="User-icon" />
                </a>
              </div>
            </li>

            <li className="rounded-circle justify-content-center border p-1">
              <div className="header__icon rounded-circle p-2 d-flex align-items-center">
                <a href="#" aria-label="Favorites">
                  <img src={favorite} alt="Favorites-icon" />
                </a>
              </div>
            </li>
            <li className="rounded-circle justify-content-center border p-1">
              <div className="header__icon rounded-circle px-2 py-1 d-flex align-items-center">
                <a href="#" aria-label="Shopping bag">
                  <img src={bag} alt="bag-icon" />
                </a>
              </div>
            </li>
            <li className="rounded-circle justify-content-center border p-1">
              <div className="header__icon header__burger rounded-circle d-flex align-items-center">
                <button
                  aria-label="Open menu"
                  className="border-0 bg-transparent"
                >
                  <img src={burger} alt="menu-icon" />
                </button>
              </div>
            </li>
          </ul>
        </nav>

        <form
          role="search"
          aria-label="Wyszukiwarka"
          className="form mx-auto d-flex align-items-center border border-1 rounded-5 overflow-hidden position-relative col-12 "
        >
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Wyszukaj"
            aria-label="Wyszukaj"
            className="form__input d-flex border-0 "
          />
          <button
            type="submit"
            aria-label="Wyszukaj"
            className="form__btn position-absolute border-0 rounded-circle d-flex align-items-center justify-content-center cursor-pointer"
          >
            <img src={search} alt="search icon" className="form__btn__icon" />
          </button>
        </form>
      </div>
    </header>
  );
};
