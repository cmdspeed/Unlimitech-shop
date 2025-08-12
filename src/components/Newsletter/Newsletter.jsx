import "../styles/newsletter.less";
import arrow from "../../icon/arrow.svg";

export const Newsletter = () => {
  return (
    <div className="container">
      <div className=" row">
        <div className="newsletter col-12">
          <div className="newsletter__info rounded-4 text-white">
            <h5 className="newsletter__info__discount ">
              Chcesz otrzymać 5% zniżki na swoje zakupy?
            </h5>
            <p className="newsletter__info__desc ">
              Zapisz się do naszego newslettera i jako pierwsza dowiedz się o
              nowościach, promocjach i ofertach specjalnych!
            </p>

            <form>
              <div className="form__newsletter position-relative d-flex ">
                <input
                  type="email"
                  className="form__newsletter__input align-items-center rounded-5 overflow-hidden border-0 position-relative col-12"
                  placeholder="Twój adres email"
                  required
                />
                <button
                  className="form__newsletter__btn btn btn-dark  position-absolute border-0 rounded-circle d-flex align-items-center justify-content-center cursor-pointer"
                  type="submit"
                >
                  <img src={arrow} alt="send" />
                </button>
              </div>

              <div className="form__newsletter__statute form-check text-white">
                <input
                  className=" form-check-input"
                  type="checkbox"
                  id="newsletterCheck"
                  required
                />
                <label
                  className="form__newsletter__statute__label form-check-label"
                  htmlFor="newsletterCheck"
                >
                  Akceptuję{" "}
                  <a href="#" className="text-white text-decoration-underline">
                    Regulamin
                  </a>{" "}
                  i{" "}
                  <a href="#" className="text-white text-decoration-underline">
                    Politykę Prywatności
                  </a>
                  .
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
