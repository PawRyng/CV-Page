import React from "react";

//elements
import Header from "./Header";
import AboutMe from "./ResumeElements/About";
import Experience from "./ResumeElements/Experience";
import Education from "./ResumeElements/Education";
import DesignSkills from "./ResumeElements/DesignSkills";
import LanguageSkills from "./ResumeElements/LanguageSkill";
import TechSkills from "./ResumeElements/TechSkill";

const Resume = ({ langg, isMenuOpen, personalist, setloading }) => {
  return (
    <>
      <Header
        lang={langg.aboutMe}
        mause={true}
        isMenuOpen={isMenuOpen}
        setloading={setloading}
        smoooth="About"
      />
      <AboutMe personalist={personalist} langg={langg.aboutMe} />

      <div className="Experience-Education-Container">
        <Experience langg={langg.Experience} />
        <Education langg={langg.Education} />
      </div>
      <DesignSkills langg={langg.DesignSkills} />
      <LanguageSkills lang={langg.LanguageSkill} />
      <TechSkills lang={langg} />
    </>
  );
};
export default Resume;
