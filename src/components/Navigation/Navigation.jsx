import user from "../../icon/user.svg";
import burger from "../../icon/burger.svg";
import bag from "../../icon/bag.svg";
import favorite from "../../icon/favorite.svg";
import "../styles/navigation.less";

export const Navigation = () => {
  return (
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
            <button aria-label="Open menu" className="border-0 bg-transparent">
              <img src={burger} alt="menu-icon" />
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};
