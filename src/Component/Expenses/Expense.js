import React, { useContext } from "react";
import ExpenseIncome from "./ExpenseIncome";
import Context from "../../ContextProvider";
import Card from "../../UI/Card";
import style from "./Expense.module.css";
const Expense = (props) => {
  const { balance, updateBalance } = useContext(Context);
  return (
    <Card className={style.h2}>
      <h3>Wallet Balance:{`$${balance}`}</h3>
      <ExpenseIncome updateBalance={updateBalance} />
    </Card>
  );
};

export default Expense;
