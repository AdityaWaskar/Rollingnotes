import React from "react";
import "./button.css";

const Button1 = (props) => {
  return (
    <button data-aos="fade" data-aos-once="true" className={props.class}>
      {props.value}
    </button>
  );
};

export default Button1;
