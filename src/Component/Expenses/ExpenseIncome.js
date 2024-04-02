import React, { useState } from "react";
import Modal from "react-modal";
import style from "./ExpenseIncome.module.css";
import Context from "../../ContextProvider";
Modal.setAppElement("#root"); // Ideally, you should call this once in your app where "#root" is your app root element.

const ExpenseIncome = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const { updateBalance } = React.useContext(Context);
  const addIncomeHandler = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => setIsOpenModal(false);

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent form submission

    // Determine which button triggered the form submission
    const action = event.nativeEvent.submitter.name;
    // console.log(action);
    if (action === "addBalance" && amount > 0) {
      console.log("Balance added:", amount);
      updateBalance(amount);
      closeModal();
    } else if (action === "closeModal") {
      console.log("Modal closed");
      closeModal();
      // Handle closing the modal here
    }

    // You can reset the form state here if needed
    setAmount("");
  };

  return (
    <>
      <button className={style.buttoncls} onClick={addIncomeHandler}>
        Add Income
      </button>
      <Modal
        className={style.modal}
        isOpen={isOpenModal}
        onRequestClose={closeModal} // Allow closing by clicking the overlay or pressing ESC
        contentLabel="Income Modal"
        role={"dialog"}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "400px", // Specify width
            height: "300px", // Specify height
            overflow: "auto", // Scrollable content
          },
        }}
      >
        <div>
          <h4>Add Balance</h4>
          <form onSubmit={submitHandler}>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit" name="addBalance">
              Add Balance
            </button>
            <button type="submit" name="closeModal">
              Close
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ExpenseIncome;
