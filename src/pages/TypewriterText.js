import React from "react";
import Typewriter from "typewriter-effect";
import "./Typewriter.scss";

const TypewriterText = () => {
  return (
    <div className="typewrite">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hi, I'm Haniel")
            .pauseFor(200)
            .deleteAll()
            .typeString("Wildlife lover, and")
            .pauseFor(200)
            .deleteAll()
            .typeString("Software Engineer")
            .pauseFor(200)
            .deleteAll()
            .typeString(
              'Hi, Im Haniel <span class="my-span" style="display: block;" >Software Engineer</span>'
            )
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterText;
