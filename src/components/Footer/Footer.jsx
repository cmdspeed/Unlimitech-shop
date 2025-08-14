import { useEffect } from "react";
import "../styles/footer.less";
import $ from "jquery";
import arrowdrop from "../../icon/arrow-drop.svg";
import phone from "../../icon/phone-footer.svg";
import email from "../../icon/email.svg";

export const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <div>
            <div>
              <h6>O nas</h6>

              <ul>
                <li>
                  <a href="/">Poznajmy się</a>
                </li>
                <li>
                  <a href="/">Skontaktuj się z nami</a>
                </li>
                <li>
                  <a href="/">Dołącz do nas</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h6>Informacje</h6>
              <ul>
                <li>
                  <a href="/">Regulamin</a>
                </li>
                <li>
                  <a href="/">Polityka prywatności</a>
                </li>
                <li>
                  <a href="/">Zasady gwarancji</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h6>Twoje konto</h6>
              <ul>
                <li>
                  <a href="/">Twoje konto</a>
                </li>
                <li>
                  <a href="/">Twoje zamówienia</a>
                </li>
                <li>
                  <a href="/">Logowanie</a>
                </li>
                <li>
                  <a href="/">Rejestracja</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <h6>Obsługa klienta</h6>
              <ul>
                <li>
                  <a href="/">Dostawa i płatność</a>
                </li>
                <li>
                  <a href="/">Wymiana</a>
                </li>
                <li>
                  <a href="/">Zwrot</a>
                </li>
                <li>
                  <a href="/">Reklamacje</a>
                </li>
                <li>
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6>Skontaktuj się z nami</h6>
            <a href="tel:+48000000000">
              <img src={phone} alt="telefon" /> (+48) 000 000 000
            </a>
            <a href="mailto:sklep@kontakt.com.pl">
              <img src={email} alt="email" /> sklep@kontakt.com.pl
            </a>
            <p>
              Jesteśmy do Twojej dyspozycji od poniedziałku do piątku w
              godzinach 8:00 - 16:00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
