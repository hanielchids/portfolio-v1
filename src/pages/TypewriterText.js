import React from "react";
import Typewriter from "typewriter-effect";
import "./Typewriter.scss";

const TypewriterText = () => {
  return (
    <div className="typewrite">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hi, Im Haniel")
            .pauseFor(500)
            .deleteAll()
            .typeString("Wildlife lover, and")
            .pauseFor(300)
            .deleteAll()
            .typeString("Software Engineer")
            .pauseFor(500)
            .deleteAll()
            .typeString(
              'Hi, Im Haniel <span style="display: block;" >Software Engineer</span>'
            )
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterText;
