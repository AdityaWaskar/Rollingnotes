import React from "react";
import Button1 from "../buttons/Button1";
import "./component2.css";

const courses = ["B. Com", "BBA", "Others", "MBA", "M. Com"];

const Component2 = () => {
  return (
    <div className="component2Container">
      <span className="component2SubText">Select Your Course Here:</span>
      <div className="buttons">
        {courses.map((course) => (
          <Button1
            class="button2Conatainer"
            value={course}
          />
        ))}
      </div>
    </div>
  );
};

export default Component2;
