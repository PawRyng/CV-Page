import React from "react";

import DesignSkill from "../../Other/translate.json";

import DesignSkillsList from "./designSkillList";
const DesignSkills = ({ langg }) => {
  return (
    <>
      <div className="designSkills">
        <div className="tree">
          <div className="tree__title">
            <h2>{langg}</h2>
          </div>
        </div>
        {DesignSkill.DesignSkills.map((item, index) => (
          <DesignSkillsList item={item} key={index} />
        ))}
      </div>
    </>
  );
};
export default DesignSkills;
