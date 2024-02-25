import { motion} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

import { useCookies } from "react-cookie";

const DarkMode = ({ darkMode, setDark }) => {

  const [cookie, setCookie] = useCookies(["dark_mode"]);
  const toggleSwitch = () => {
    setDark(!darkMode);

    setCookie("dark_mode", !darkMode, { maxAge: 60 * 60 * 24 * 256 });
    if (!darkMode) {
      document.querySelector("body").setAttribute("id", "dark");
    } else {
      document.querySelector("body").setAttribute("id", "");
    }
  };
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };
  return (
    <div className="dark-mode" data-isOn={darkMode} onClick={toggleSwitch}>
      <motion.div className="dark-mode__switch" layout transition={spring} />
      <FontAwesomeIcon
        icon={faSun}
        className="dark-mode__icon dark-mode__icon--sun"
      />
      <FontAwesomeIcon
        icon={faMoon}
        className="dark-mode__icon dark-mode__icon--moon"
      />
    </div>
  );
};

export default DarkMode;
