import React from "react";
//svg

import { ReactComponent as Insta } from "../IMG's/FontAwesomeIcons/instagram.svg";
import { ReactComponent as Git } from "../IMG's/FontAwesomeIcons/github.svg";
import { ReactComponent as Linkedin } from "../IMG's/FontAwesomeIcons/linkedin.svg";

// import trans from "../Other/translate.json";

const Footer = ({ trans, langg }) => {
  return (
    <>
      <footer className="footer">
        <p className="footer__coppy">© 2023 Paweł_CV. {langg.footer}</p>
        <div className="footer__container">
        <a href={trans.Links.Git} target="_blank" rel="noopener noreferrer">
          <Git
            className="footer__item"
          />
          </a>
        <a href={trans.Links.Linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin
            className="footer__item"
          />
          </a>
          <a href={trans.Links.Instagram} target="_blank" rel="noopener noreferrer">
          <Insta
            className="footer__item"
          />
          </a>
        </div>
      </footer>
    </>
  );
};
export default Footer;
