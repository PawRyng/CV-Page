import React from "react";
import List from "./list";

const Experience = ({ langg }) => {

  return (
    <>
      <div className="tree">
        <div className="tree__title">
          <h2>{langg.Title}</h2>
        </div>
        <div className="tree-items">
          {langg.works.map((item, index) => (
            <List element={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Experience;
