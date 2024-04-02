import React from "react";
import Expense from "./Component/Expenses/Expense";
import NewExpense from "./Component/NewExpenses/NewExpense";
import { ContextProvider } from "./ContextProvider";
import ShowExpense from "./Component/ShowExpenses/ShowExpense";
import HeroSection from "./UI/HeroSection";
import BodySection from "./UI/BodySection";
import { SnackbarProvider, useSnackbar } from "notistack";
function App() {
  return (
    <>
      <h2>Expense Tracker</h2>
      <SnackbarProvider>
        <ContextProvider>
          <HeroSection />
          <BodySection />
        </ContextProvider>
      </SnackbarProvider>
    </>
  );
}

export default App;
