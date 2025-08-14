import { useEffect } from "react";
import "../styles/footer.less";
import $ from "jquery";
import arrowdrop from "../../icon/arrow-drop.svg";
import phone from "../../icon/phone-footer.svg";
import email from "../../icon/email.svg";

export const Footer = () => {
  return (
    <footer className="footer rounded-4 ">
      <div className="footer__container">
        <div className="row">
          <div className="footer__wrapper col-12 col-md-2  mobile-wrapper ">
            <div className="footer__wrapper__border border-bottom border-1 ">
              <h6 className="footer__wrapper__title fw-bold position-relative d-flex align-items-center justify-content-between">
                O nas
                <img
                  src={arrowdrop}
                  alt="rozwiń menu"
                  className="footer__wrapper__arrow"
                />
              </h6>

              <ul className="footer__wrapper__list list-unstyled">
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Poznajmy się
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Skontaktuj się z nami
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Dołącz do nas
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__wrapper col-12 col-md-2  mobile-wrapper ">
            <div className="footer__wrapper__border border-bottom border-1 ">
              <h6 className="footer__wrapper__title fw-bold position-relative d-flex align-items-center justify-content-between">
                Informacje
                <img
                  src={arrowdrop}
                  alt="rozwiń menu"
                  className="footer__wrapper__arrow"
                />
              </h6>
              <ul className="footer__wrapper__list list-unstyled">
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Regulamin
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="footer__wrapper__list__item text-decoration-none "
                  >
                    Polityka prywatności
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="footer__wrapper__list__item text-decoration-none "
                  >
                    Zasady gwarancji
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__wrapper col-12 col-md-2  mobile-wrapper ">
            <div className="footer__wrapper__border border-bottom border-1 ">
              <h6 className="footer__wrapper__title fw-bold position-relative d-flex align-items-center justify-content-between">
                Twoje konto
                <img
                  src={arrowdrop}
                  alt="rozwiń menu"
                  className="footer__wrapper__arrow"
                />
              </h6>
              <ul className="footer__wrapper__list list-unstyled">
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Twoje konto
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Twoje zamówienia
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Logowanie
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Rejestracja
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__wrapper col-12 col-md-2  mobile-wrapper ">
            <div className="footer__wrapper__border border-bottom border-1 ">
              <h6 className="footer__wrapper__title fw-bold position-relative d-flex align-items-center justify-content-between">
                Obsługa klienta
                <img
                  src={arrowdrop}
                  alt="rozwiń menu"
                  className="footer__wrapper__arrow"
                />
              </h6>
              <ul className="footer__wrapper__list list-unstyled">
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Dostawa i płatność
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Wymiana
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Zwrot
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    Reklamacje
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className=" footer__wrapper__list__item text-decoration-none "
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__wrapper footer__container col-12 col-md-4 row d-flex">
            <h6 className="footer__wrapper__contact fw-semibold ">
              Skontaktuj się z nami
            </h6>
            <a
              href="tel:+48000000000"
              className="footer__wrapper__tel fw-medium d-flex text-decoration-none"
            >
              <img src={phone} alt="telefon" /> (+48) 000 000 000
            </a>
            <a
              href="mailto:sklep@kontakt.com.pl"
              className="footer__wrapper__email fw-medium d-flex text-decoration-none"
            >
              <img src={email} alt="email" /> sklep@kontakt.com.pl
            </a>
            <p className="footer__wrapper__desc ">
              Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w
              godzinach 8:00 - 16:00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
