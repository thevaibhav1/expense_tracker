import React, { useContext, useState } from "react";
import ExpenseForm from "./ExpenseForm";
import Context from "../../ContextProvider";
import style from "./NewExpense.module.css";
import Card from "../../UI/Card";
const NewExpense = () => {
  const { expense } = useContext(Context);
  return (
    <Card className={style.h5}>
      <h3>Expense:{expense}</h3>
      <ExpenseForm />
    </Card>
  );
};

export default NewExpense;
