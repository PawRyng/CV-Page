import React from "react";

import Typewriter from "typewriter-effect";

export default function loading({ setloading }) {
  const wrapperClass = `loadingWrapper `;

  return (
    <div className="loading">
      <Typewriter
        options={{
          delay: 50,
          wrapperClassName: wrapperClass,
          skipAddStyles: true,
          cursor: "",
        }}
        onInit={(typewritter) => {
          typewritter
            .typeString("loading...")
            .callFunction(() => {
              const element = document.querySelector(`.${wrapperClass}`);
              if (element) {
                element.style = "opacity:0;";
              }
              setTimeout(() => {
                setloading(true);
              }, 500);
            })
            .start();
        }}
      />
    </div>
  );
}
