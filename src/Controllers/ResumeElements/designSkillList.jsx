import React from "react";

const DesignSkillsList = ({ item }) => {
  return (
    <>
      <div className="designSkills-skill">
        <h6 className="designSkills-skill__title">{item.title}</h6>
        <div className="designSkills-skill__prograssBar designSkills-skill__prograssBar--empty">
          <div
            className="designSkills-skill__level"
            style={{ left: `${item.level - 5}%` }}
          >
            {item.level}%
          </div>
          <div
            className="designSkills-skill__prograssBar designSkills-skill__prograssBar--progress"
            style={{ width: `${item.level}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};
export default DesignSkillsList;
