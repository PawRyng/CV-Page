import React from "react";

const LanguageItem = ({ item, index }) => {
  const dot = () => {
    let dots = [];
    for (let i = 1; i <= item.Level; i++) {
      dots.push(
        <div
          className="language-item-dots__dot language-item-dots__dot--active"
          key={Math.random()}
        ></div>
      );
    }
    for (let i = 1; i <= 10 - item.Level; i++) {
      dots.push(<div className="language-item-dots__dot" key={i}></div>);
    }

    return dots.map((item) => item);
  };
  return (
    <div className="language-item" key={index}>
      <div className="language-item__Name">{item.Name}</div>
      <div className="language-item-dots">{dot()}</div>
    </div>
  );
};
export default LanguageItem;
