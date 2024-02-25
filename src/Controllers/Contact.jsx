import React from "react";
// import Typewriter from "typewriter-effect";
import Header from "./Header";

//icon
import { ReactComponent as Phone } from "../IMG's/ContactIcons/phone-solid.svg";
import { ReactComponent as Mail } from "../IMG's/ContactIcons/envelope-solid.svg";

export default function Contact({ lang, personalist, isMenuOpen, setloading }) {
  return (
    <>
      <Header
        lang={lang}
        mause={true}
        isMenuOpen={isMenuOpen}
        setloading={setloading}
        smoooth="contact"
      />

      <div className="contact" id="contact">
        <div className="contact__title">
          <h2>{lang.title}</h2>
        </div>
        <div className="contact-container">
          <div className="contact-container__item">
            <Phone />
            <h6>{lang.content[0].title}</h6>
            <a href={`tel:${lang.content[1].content}`}>
              +48 {lang.content[0].content}
            </a>
          </div>
          <div className="contact-container__item">
            <Mail />
            <h6>{lang.content[1].title}</h6>
            <a href={`mailto:${lang.content[1].content}`}>
              {lang.content[1].content}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
