import "../styles/header.less";
import logo from "../../icon/logo.svg";
import search from "../../icon/search.svg";

import { Navigation } from "../Navigation/Navigation";
import { SlickSlider } from "../SlickSlider/SlickSlider";
import { TopBar } from "../TopBar/TopBar";

export const Header = () => {
  return (
    <header className="header container-fluid">
      <TopBar />

      <div className="header__container row text-left d-xxl-none">
        <div className="header__logo col-5 align-content-center">
          <img src={logo} alt="logo" />
        </div>
        <Navigation />
        <form
          role="search"
          aria-label="Wyszukiwarka"
          className="form mx-auto d-flex align-items-center border border-1 rounded-5 overflow-hidden position-relative col-12"
        >
          <input
            id="search"
            name="search"
            type="search"
            placeholder="Wyszukaj"
            aria-label="Wyszukaj"
            className="form__input d-flex border-0"
          />
          <button
            type="submit"
            aria-label="Wyszukaj"
            className="form__btn position-absolute border-0 rounded-circle d-flex align-items-center justify-content-center cursor-pointer"
          >
            <img src={search} alt="search icon" className="form__btn__icon" />
          </button>
        </form>
        <SlickSlider />
      </div>

      <div className="header__pc justify-content-center row align-items-center d-none d-xxl-flex ">
        <div className="col-auto">
          <img src={logo} alt="logo" className="header__pc__logo" />
        </div>

        <div className="main__menu__wrapper col d-flex">
          <ul className="main__menu list-unstyled d-flex align-items-center  m-0">
            <li>
              <a
                href="/"
                className="main__menu__link fw-medium dropdown-toggle"
              >
                Damskie buty skórzane
              </a>
            </li>

            <li>
              <a className="main__menu__link fw-medium" href="/">
                Bony podarunkowe
              </a>
            </li>
            <li>
              <a className="main__menu__link fw-medium" href="/">
                Nowości
              </a>
            </li>
            <li>
              <a className="main__menu__link fw-medium" href="/">
                Bestsellery
              </a>
            </li>
            <li>
              <a
                className="main__menu__link fw-bold main__menu__link--sale"
                href="/"
              >
                Wyprzedaż
              </a>
            </li>
          </ul>
        </div>

        <div className="col-auto p-0">
          <form
            role="search"
            aria-label="Wyszukiwarka"
            className="form header__search d-flex align-items-center border border-1 rounded-5 overflow-hidden position-relative m-0"
          >
            <input
              id="search-desktop"
              name="search-desktop"
              type="search"
              placeholder="Wyszukaj"
              aria-label="Wyszukaj"
              className="form__input border-0"
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

        <div className=" header__icons--pc col-auto d-flex align-items-center justify-content-center">
          <Navigation />
        </div>
      </div>
    </header>
  );
};
