//img's
import polFlag from "../../IMG's/FlagsIcon/poland.png";
import engFlag from "../../IMG's/FlagsIcon/united-states.png";

const Navigation = ({ changeWebChandler }) => {
  return (
    <div className="flagContainer">
      <button
        className={`flagContainer__button ${
          localStorage.getItem("language") === "pl" &&
          "flagContainer__button--active"
        }`}
        onClick={() => {
          changeWebChandler();
          localStorage.setItem("language", "pl");
        }}
      >
        <img src={polFlag} alt="poland" />
      </button>
      <button
        className={`flagContainer__button ${
          (localStorage.getItem("language") === "en" || localStorage.getItem("language") === null) &&
          "flagContainer__button--active"
        }`}
        onClick={() => {
          changeWebChandler();
          localStorage.setItem("language", "en");
        }}
      >
        <img src={engFlag} alt="english" />
      </button>
    </div>
  );
};

export default Navigation;
