import React from "react";

const List = ({ element }) => {
  return (
    <>
      <div className="tree-items-item">
        <p className="tree-items-item__date">{element.date}</p>
        <p className="tree-items-item__spec">{element.spec}</p>
        <p className="tree-items-item__description">{element.description}</p>
      </div>
    </>
  );
};
export default List;
