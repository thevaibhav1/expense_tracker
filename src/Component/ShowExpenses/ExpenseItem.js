// ExpenseItem.js
import React, { useState, useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import style from "./ShowExpenses.module.css"; // Adjust the path as needed
import EditModal from "./EditModal";
import Context from "../../ContextProvider";
const ExpenseItem = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteExpenseHandler } = useContext(Context);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    deleteExpenseHandler(item.id, item.amount); // Call deleteExpenseHandler with the expense ID
  };

  return (
    <>
      <li className={style.expenseItem}>
        <div className={style.left}>
          <span>{item.title}</span>
          <span className={style.dateText}>
            {new Date(item.date).toLocaleDateString()}
          </span>
        </div>
        <div className={style.right}>
          <span>{item.amount}</span>
          <button onClick={handleDelete}>
            <MdDeleteForever />
          </button>
          <button onClick={openModal}>
            <FaEdit />
          </button>
        </div>
      </li>
      <EditModal isOpen={isModalOpen} onRequestClose={closeModal} item={item} />
    </>
  );
};

export default ExpenseItem;
