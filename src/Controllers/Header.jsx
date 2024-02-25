import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { useLocation, useNavigate } from "react-router-dom";

//svg

import { ReactComponent as Mause } from "../IMG's/FontAwesomeIcons/Mause.svg";



const Header = ({ lang, mause = false, isMenuOpen, setloading, smoooth }) => {
  let location = useLocation();
  const navigate = useNavigate();
  const [mauseVisable, setMauseVisable] = useState(mause);
  const [flag, setFlag] = useState(false);

  const handler = () => {
    const element = document.getElementById(smoooth);
    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const mauseVisableHandler = (e) => {
    if (window.scrollY === 0) {
      setMauseVisable(true);
    } else {
      setMauseVisable(false);
    }
  };

  window.addEventListener("scroll", mauseVisableHandler);
  const mauseContainer = () => {
    return (
      <div
        className={`mauseContainer ${
          isMenuOpen ? "mauseContainer--open " : ""
        }${mauseVisable ? "" : "mauseContainer--open"}`}
      >
        <span onClick={handler}>
          <Mause />
        </span>
      </div>
    );
  };

  const linksUnder = () => {
    return (
      <button
        className="buttonsNavigation__item"
        onClick={() => changeWebChandler(location.pathname)}
      >
        <Typewriter
          options={{
            delay: 50,
            loop: false,
            autoStart: true,
            cursor: "",
          }}
          onInit={(typewritter) => {
            typewritter.typeString(location.pathname.slice(1)).start();
          }}
        />
      </button>
    );
  };

  const changeWebChandler = (path) => {
    if (document.querySelector(".App--active") != null) {
      document.querySelector(".App").classList.remove("App--active");
    }
    setTimeout(() => {
      navigate(path);
      setloading(false);
    }, 1000);
  };
  return (
    <>
      <h1 className="glitch">
        <span aria-hidden="true">{lang.title}</span>
        {lang.title}
        <span aria-hidden="true">{lang.title}</span>
      </h1>
      <div className="buttonsNavigation">
        <button
          className="buttonsNavigation__item"
          onClick={() => changeWebChandler("/")}
        >
          <Typewriter
            options={{
              delay: 50,
              loop: false,
              autoStart: true,
              cursor: "",
            }}
            onInit={(typewritter) => {
              typewritter
                .typeString("Home")
                .callFunction(() => setFlag(true))
                .start();
            }}
          />
        </button>
        /{flag && linksUnder()}
      </div>
      {mauseContainer()}
    </>
  );
};

export default Header;
