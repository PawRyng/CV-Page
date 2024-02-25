import { useNavigate } from "react-router-dom";

import Flag from "./Nav/Flag";
import NavigationElement from "./Nav/Navigation";
import DarkMode from "./Nav/DarkMode";

const Navigation = ({
  lang,
  setLanguage,
  setloading,
  isMenuOpen,
  setIsMenuOpen,
  setDarkMode,
  darkMode,
}) => {
  const navigate = useNavigate();
  const changeWebChandler = (navigateLocation) => {
    if (document.querySelector(".App--active") != null) {
      document.querySelector(".App").classList.remove("App--active");
    }
    setTimeout(() => {
      setloading(false);
      navigate(navigateLocation);
    }, 1000);
  };
  return (
    <div className="containerTop">
      <Flag changeWebChandler={changeWebChandler} />
      <NavigationElement
        lang={lang}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        changeWebChandler={changeWebChandler}
      />
      <DarkMode darkMode={darkMode} setDark={setDarkMode} />
    </div>
  );
};

export default Navigation;
