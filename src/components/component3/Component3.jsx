import React from "react";
import "./component3.css";

const Component3 = () => {
  return (
    <div className="component3Container">
      <h1 data-aos="slide-up" data-aos-once="true">
        Select :
      </h1>
      <div className="buttons">
        <button
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="200"
          className="button3Container"
          id="btn1"
        >
          Secondary
        </button>
        <button
          data-aos="zoom-in"
          data-aos-once="true"
          data-aos-duration="200"
          className="button3Container"
          id="btn2"
        >
          Senior Secondary
        </button>
      </div>
    </div>
  );
};

export default Component3;
