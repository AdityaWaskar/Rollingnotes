import React, { useState } from "react";
import "./movableBackground.css";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { RiBook2Fill } from "react-icons/ri";
import Button1 from "../buttons/Button1";
// import Wave from "react-wavify";

const institues = [
  "Dibrugarh University",
  "Gauhati University",
  "AHSEC",
  "CBSE",
  "NIOS",
];

const study_materials = [
  "Previous Year Question Papers",
  "Important Questions",
  "NCERIT Solutions",
  "Study Notes",
  "Solved Question Papers",
  "Long Questions",
  "Short Questions",
  "Sullabus",
  "Flowcharts",
];

const MovableBackground = () => {
  const [optionActive, setOptionActive] = useState("col1");
  const [subOptions, setSubOptions] = useState(institues);
  const [optionMiddleText, setOptionMiddleText] = useState("Institue");
  return (
    <div className="movable_background_container">
      <div className="options">
        <div
          className="col"
          id={`${optionActive == "col1" ? "col1" : "removeCol1"}`}
          onClick={() => {
            setOptionActive("col1");
            setSubOptions(institues);
            setOptionMiddleText("Institue");
          }}
        >
          <HiOutlineOfficeBuilding className="option_icon" />
          <div className="option_title">Institues</div>
        </div>
        <div
          className="col"
          id={`${optionActive == "col2" ? "col2" : "removeCol2"}`}
          onClick={() => {
            setOptionActive("col2");
            setSubOptions(study_materials);
            setOptionMiddleText("Preferred Study Material");
          }}
        >
          <RiBook2Fill className="option_icon" />
          <div className="option_title">Study Materials</div>
        </div>
      </div>
      <div className="middleText">Select Your {optionMiddleText} Below</div>
      <div className="states">
        {subOptions.map((state) => (
          <Button1 class={"stateButton"} value={state} key={state} />
        ))}
      </div>
    </div>
  );
};

export default MovableBackground;
