// EditModal.js
import React, { useRef, useContext } from "react";
import Modal from "react-modal";
import Context from "../../ContextProvider";

// Make sure to set the app root in your entry file (e.g., index.js)
Modal.setAppElement("#root");
const EditModal = ({ isOpen, onRequestClose, item }) => {
  const descriptionRef = useRef();
  const amountRef = useRef();
  const categoryRef = useRef();
  const dateRef = useRef();
  const { EditAmountHandler, EditExpenseHandler, addExpenseHandler } =
    useContext(Context);

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

    // If an item is provided (i.e., we're editing), call the EditExpenseHandler, otherwise add a new expense
    EditAmountHandler(amount, item.amount);
    EditExpenseHandler(expenseItemData);
    // Close the modal after form submission
    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h1>{item ? "Edit Expense" : "Add Expense"}</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="description"
          placeholder="Title"
          defaultValue={item ? item.title : ""}
          ref={descriptionRef}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Price"
          defaultValue={item ? item.amount : ""}
          ref={amountRef}
        />
        <select
          name="category"
          ref={categoryRef}
          defaultValue={item ? item.category : ""}
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Travel">Travel</option>
        </select>

        <input
          type="Date"
          name="date"
          placeholder="Date"
          defaultValue={item ? item.date : ""}
          ref={dateRef}
        />
        <button type="submit">{item ? "Edit" : "Add"} Expense</button>
      </form>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default EditModal;
