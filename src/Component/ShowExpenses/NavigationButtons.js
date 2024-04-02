// NavigationButtons.js
import React from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import style from "./ShowExpenses.module.css"; // Adjust the path as needed

const NavigationButtons = ({ onPrev, onNext, prevDisabled, nextDisabled }) => {
  return (
    <div className={style.btncls}>
      <button onClick={onPrev} disabled={prevDisabled}>
        <BsArrowLeft />
      </button>
      <button onClick={onNext} disabled={nextDisabled}>
        <BsArrowRight />
      </button>
    </div>
  );
};

export default NavigationButtons;
