import phone from "../../icon/phone.svg";
import "../styles/topBar.less";

export const TopBar = () => {
  return (
    <div className="top-bar row  ">
      <div className="top-bar__phone col-12 d-flex justify-content-center ">
        <img src={phone} alt="phone" />
        <p className="top-bar__phone__text text-center fw-semibold text-white m-0">
          (+48) 000 000 000
        </p>
      </div>
    </div>
  );
};
