import { useEffect } from "react";
import "../styles/footer.less";
import $ from "jquery";
import arrowdrop from "../../icon/arrow-drop.svg";
import phone from "../../icon/phone-footer.svg";
import email from "../../icon/email.svg";
import inpostkurier from "../../icon/inpost-kurier.png";
import inpostpaczkomat from "../../icon/inpost-paczkomaty.png";
import blik from "../../icon/blik.png";
import przelewy24 from "../../icon/przelewy24.png";
import paypo from "../../icon/paypo.png";
import paypal from "../../icon/paypal.png";
import fb from "../../icon/fb.svg";
import ig from "../../icon/instagram.svg";
import tiktok from "../../icon/tiktok.svg";

export const Footer = () => {
  useEffect(() => {
    function checkMobile() {
      return $(window).width() < 768;
    }

    const $headers = $(".mobile-wrapper h6");

    $headers.off("click").on("click", function () {
      if (checkMobile()) {
        $(this).toggleClass("active");
        $(this).next("ul").stop(true, true).slideToggle(200);
      }
    });

    const resizeHandler = () => {
      if (!checkMobile()) {
        $(".mobile-wrapper ul").show();
        $headers.removeClass("active");
      } else {
        $(".mobile-wrapper ul").hide();
      }
    };

    $(window).on("resize", resizeHandler);
    resizeHandler();

    return () => {
      $(window).off("resize", resizeHandler);
      $headers.off("click");
    };
  }, []);

  return (
    <footer className="footer rounded-4 ">
      <div>
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
                    className="footer__wrapper__list__item text-decoration-none"
                  >
                    Polityka prywatności
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="footer__wrapper__list__item text-decoration-none"
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

          <div className="footer__wrapper footer__container col-12 col-md-4 d-flex flex-column border-bottom ">
            <h6 className="footer__wrapper__contact fw-semibold ">
              Skontaktuj się z nami
            </h6>
            <a
              href="tel:+48000000000"
              className="footer__wrapper__tel fw-medium d-flex  text-decoration-none"
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

          <div className="footer__delivery row  ">
            <h6 className="footer__delivery__title fw-bold ">
              Dostawa i płatność
            </h6>
            <div className="footer__delivery__icon col-4 col-md-2 p-0">
              <a href="/">
                <img src={inpostkurier} alt="InPost kurier" />
              </a>
            </div>
            <div className="footer__delivery__icon col-4 col-md-2 p-0">
              <a href="/">
                <img src={inpostpaczkomat} alt="InPost paczkomaty" />
              </a>
            </div>
            <div className="footer__delivery__icon col-4 col-md-2 p-0">
              <a href="/">
                {" "}
                <img src={blik} alt="blik" />
              </a>
            </div>
            <div className="footer__delivery__icon col-4 col-md-2 p-0">
              <a href="/">
                {" "}
                <img src={przelewy24} alt="przelewy24" />
              </a>
            </div>
            <div className="footer__delivery__icon col-4 col-md-2 p-0">
              <a href="/">
                {" "}
                <img src={paypo} alt="paypo" />
              </a>
            </div>
            <div className="footer__delivery__icon col-4 col-md-2 p-0">
              <a href="/">
                <img src={paypal} alt="paypal" />
              </a>
            </div>
            <div className="  footer__social p-0">
              <h6 className="footer__social__title fw-bold ">Social media</h6>
              <div className="footer__social__wrapper d-flex">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className=" footer__social__icon"
                >
                  <img src={fb} alt="Facebook" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className=" footer__social__icon"
                >
                  <img src={ig} alt="Instagram" />
                </a>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className=" footer__social__icon"
                >
                  <img src={tiktok} alt="TikTok" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
