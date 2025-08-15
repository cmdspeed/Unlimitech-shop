import phone from "../../icon/phone.svg";
import email from "../../icon/email-top.svg";
import delivery from "../../icon/delivery.svg";

import "../styles/topBar.less";

export const TopBar = () => {
  return (
    <div className="topBar row">
      <div className="topBar__phone col-12 d-flex justify-content-center d-lg-none">
        <img src={phone} alt="phone" />
        <p className="topBar__phone__text text-center fw-semibold text-white m-0">
          (+48) 000 000 000
        </p>
      </div>

      <div className="topBar__desktop col-12 d-none d-lg-flex justify-content-center align-items-center fw-semibold">
        <div className="topBar__item d-flex border-end">
          <img src={phone} alt="phone" />
          <span>(+48) 000 000 000</span>
        </div>
        <div className="topBar__item d-flex border-end">
          <img src={email} alt="email" />
          Napisz do nas!
        </div>
        <div className="topBar__item d-flex border-end">
          <img src={delivery} alt="delivery" />
          Darmowa dostawa
        </div>
        <div className="topBar__item">30 Dni na darmowy zwrot</div>
      </div>
    </div>
  );
};
