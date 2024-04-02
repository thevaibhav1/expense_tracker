// ShowExpense.js
import React, { useContext, useState } from "react";
import Context from "../../ContextProvider";
import style from "./ShowExpenses.module.css";
import ExpenseItem from "./ExpenseItem";
import NavigationButtons from "./NavigationButtons";

const ShowExpense = () => {
  const { Dummy_data } = useContext(Context);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const itemsPerPage = 3;

  const nextItems = () => {
    setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const prevItems = () => {
    setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
  };

  const editHandler = () => {
    setIsOpen(true);
  };

  const currentItems = Dummy_data.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className={style.expenseContainer}>
      <div className={style.showExpensesContainer}>
        <ul className={style.showExpensesList}>
          {currentItems.map((item) => (
            <ExpenseItem key={item.id} item={item} onEdit={editHandler} />
          ))}
        </ul>
        <NavigationButtons
          onPrev={prevItems}
          onNext={nextItems}
          prevDisabled={currentIndex <= 0}
          nextDisabled={currentIndex + itemsPerPage >= Dummy_data.length}
        />
      </div>
    </div>
  );
};

export default ShowExpense;
