import React from "react";
import Expense from "../Component/Expenses/Expense";
import NewExpense from "../Component/NewExpenses/NewExpense";
import style from "./HeroSection.module.css";
import PieChartComponent from "../Component/Charts/PieChart";
const HeroSection = () => {
  return (
    <div className={style.container}>
      <Expense />
      <NewExpense />
      <PieChartComponent />
    </div>
  );
};

export default HeroSection;
