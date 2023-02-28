import React from "react";
import Typewriter from "typewriter-effect";
import "./component4.css";

const Component4 = () => {
  return (
    <div
      className="component4Container"
      //   data-aos-anchor-placement="top-center"
    >
      <p data-aos="slide-left" data-aos-once="true" id="title">
        <u>Senior Secondary</u>
      </p>
      <p data-aos="slide-left" data-aos-once="true" id="subtitle">
        Previous year Question Papers - NIOS Senior Secondary
      </p>
      <div data-aos="slide-left" data-aos-once="true">
        <Typewriter
          options={{
            strings: ["(Select Year to Download)"],
            autoStart: true,
            loop: true,
          }}
          id="animation_text"
        />
      </div>
      <p id="subtitle2" data-aos="slide-left" data-aos-once="true">
        <u>Will Be updated In Few Days</u>
      </p>
    </div>
  );
};

export default Component4;
