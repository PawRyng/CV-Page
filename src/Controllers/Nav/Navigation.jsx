import { useLocation } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const NavigationElement = ({
  lang,
  isMenuOpen,
  setIsMenuOpen,
  changeWebChandler,
}) => {
  const location = useLocation();
  const [isDisplay, setIsDisplay] = useState(false);

  const handleMenuToggle = () => {
    if (!isMenuOpen) {
      setIsDisplay(!isDisplay);
      setTimeout(() => {
        setIsMenuOpen(!isMenuOpen);
      }, 10);
    } else {
      setIsMenuOpen(!isMenuOpen);
      setTimeout(() => {
        setIsDisplay(!isDisplay);
      }, 700);
    }
  };
  return (
    <nav className="navigation">
      <button className="navigation__hamburger" onClick={handleMenuToggle}>
        <FontAwesomeIcon className="icon" icon={isMenuOpen ? faX : faBars} />
      </button>
      <ul
        className={`navigation__menu ${
          isMenuOpen ? "navigation__menu--open" : ""
        } ${isDisplay ? "navigation__menu--display" : ""}`}
      >
        <li
          className={`navigation__menu-item ${
            location.pathname.substring(1) === "About"
              ? "navigation__menu-item--active"
              : ""
          }`}
          onClick={() => changeWebChandler("About")}
        >
          {lang.Resume}
        </li>
        <li
          className={`navigation__menu-item ${
            location.pathname.substring(1) === "Portfolio"
              ? "navigation__menu-item--active"
              : ""
          }`}
          onClick={() => changeWebChandler("Portfolio")}
        >
          {lang.Protfolio}
        </li>
        <li
          className={`navigation__menu-item ${
            location.pathname.substring(1) === "Contact"
              ? "navigation__menu-item--active"
              : ""
          }`}
          onClick={() => changeWebChandler("Contact")}
        >
          {lang.Contact}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationElement;
