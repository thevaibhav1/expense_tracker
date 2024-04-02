// Context.js
import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [Dummy_data, setDummyData] = useState([]);
  const [balance, setBalance] = useState(4500);
  const [expense, setExpense] = useState(0);
  const totalAmountHandler = (amount) => {
    const newbalance = parseInt(balance);
    setBalance(newbalance - amount);
  };
  const expenseHandler = (amount) => {
    setExpense((prev) => prev + amount);
  };
  const addExpenseHandler = (expenseData) => {
    // Generate a unique ID for the new expense item
    const id = Math.random().toString(36).substr(2, 9);

    // Create a new expense object with the generated ID
    const newExpense = { ...expenseData, id };

    // Check if an expense with the same title and date already exists
    const existingExpenseIndex = Dummy_data.findIndex(
      (item) =>
        item.title === expenseData.title && item.date === expenseData.date
    );

    if (existingExpenseIndex !== -1) {
      // If expense exists, update its amount
      const updatedExpenses = [...Dummy_data];
      updatedExpenses[existingExpenseIndex].amount += expenseData.amount;
      setDummyData(updatedExpenses);
    } else {
      // If expense does not exist, add it to the beginning of the array
      setDummyData((prevExpenses) => [newExpense, ...prevExpenses]);
    }
  };

  const deleteExpenseHandler = (expenseId, amount) => {
    setDummyData((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== expenseId)
    );
    totalAmountHandler(-amount);
    setExpense((prev) => prev - amount);
  };

  const EditExpenseHandler = (expenseData) => {
    // Find the index of the expense item that matches the provided expenseData
    const expenseIndex = Dummy_data.findIndex(
      (item) =>
        item.title === expenseData.title && item.date === expenseData.date
    );
    // If expense exists, update all fields
    const updatedDummyData = [...Dummy_data];
    updatedDummyData[expenseIndex] = {
      ...expenseData,
      date: new Date(expenseData.date),
    };

    // Update the state with the updated data
    setDummyData(updatedDummyData);
  };

  const EditAmountHandler = (newAmount, oldAmount) => {
    const amountDifference = newAmount - oldAmount;
    setBalance((prevBalance) => prevBalance - amountDifference);
    setExpense((prevExpense) => prevExpense + amountDifference);
  };

  const updateBalance = (amount) => {
    const newbalance = parseInt(balance);
    const newamount = parseInt(amount);
    setBalance(newbalance + newamount);
  };
  // console.log(Dummy_data.length);
  // Store data in localStorage
  useEffect(() => {
    const storedData = localStorage.getItem("expenses");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setDummyData(parsedData.Data);
      setBalance(parsedData.Balance);
      setExpense(parsedData.Expense);
      console.log(parsedData.Data);
    }
  }, []);

  // Store data in localStorage
  useEffect(() => {
    if (Dummy_data.length > 0) {
      localStorage.setItem(
        "expenses",
        JSON.stringify({
          Data: Dummy_data,
          Balance: balance,
          Expense: expense,
        })
      );
    }
  }, [Dummy_data, balance, expense]);

  return (
    <Context.Provider
      value={{
        Dummy_data,
        totalAmountHandler,
        addExpenseHandler,
        updateBalance,
        expenseHandler,
        deleteExpenseHandler,
        EditExpenseHandler,
        EditAmountHandler,
        balance,
        expense,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
