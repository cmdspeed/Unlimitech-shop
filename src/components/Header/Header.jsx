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
      <div className="header__container row text-left">
        <div className="header__logo col-5 align-content-center">
          <img src={logo} alt="logo" />
        </div>

        <Navigation />

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
        <SlickSlider />
      </div>
    </header>
  );
};
