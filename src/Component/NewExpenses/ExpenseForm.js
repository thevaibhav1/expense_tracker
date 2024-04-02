import React, { useState, useRef, useContext } from "react";
import Modal from "react-modal";
import Context from "../../ContextProvider";
import style from "./ExpenseForm.module.css";
import { useSnackbar } from "notistack";
const ExpenseForm = (props) => {
  // const [expenseItem, setExpenseItem] = useState({});
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { balance } = useContext(Context);
  const descriptionRef = useRef();
  const amountRef = useRef();
  const categoryRef = useRef();
  const dateRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const { totalAmountHandler, addExpenseHandler, expenseHandler } =
    useContext(Context);
  const openModal = (balance) => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Accessing form fields using refs
    const title = descriptionRef.current.value;
    const amount = Number(amountRef.current.value);
    const category = categoryRef.current.value;
    const date = dateRef.current.value;

    // Setting the expense item state
    const expenseItemData = {
      title: title,
      amount: amount,
      category: category,
      date: date,
    };

    // Pass the expense item data to the parent component for processing
    addExpenseHandler(expenseItemData);

    totalAmountHandler(expenseItemData.amount);

    expenseHandler(expenseItemData.amount);
    // Close the modal after form submission
    closeModal();
  };

  return (
    <>
      <button className={style.button11} onClick={() => openModal(balance)}>
        Add Expense
      </button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="description"
            placeholder="Title"
            ref={descriptionRef}
            required
          />
          <input
            type="number"
            name="amount"
            placeholder="Price"
            ref={amountRef}
          />
          <select name="category" ref={categoryRef}>
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Travel">Travel</option>
          </select>

          <input type="Date" name="date" placeholder="Date" ref={dateRef} />
          <button type="submit">Add Expense</button>
        </form>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </>
  );
};

export default ExpenseForm;
