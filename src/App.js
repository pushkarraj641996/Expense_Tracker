import React, { useState } from "react";

import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

function App() {
  const List = [
    {
      id: "e1",
      title: "Cook",
      amount: 2000,
      date: new Date(2021, 6, 13),
    },
  ];

  const [updatedList, setUpdatedList] = useState(List);

  function addExpenseHandler(expense) {
    setUpdatedList((prevState) => {
      return [expense, ...prevState];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={updatedList} />
    </div>
  );
}

export default App;
