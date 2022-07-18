import React, { useState } from "react";
import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [isFormShown, setIsFormShown] = useState(false);

  function onAddExpenseFormHandler() {
    setIsFormShown(!isFormShown);
  }

  function saveExpenseDataHandler(expenseDataEntered) {
    const expenseData = {
      ...expenseDataEntered,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    onAddExpenseFormHandler();
  }

  return (
    <div className="new-expense">
      {isFormShown ? (
        <ExpenseForm
          onSave={saveExpenseDataHandler}
          onCancel={onAddExpenseFormHandler}
        />
      ) : (
        <button onClick={onAddExpenseFormHandler}>Add new expense</button>
      )}
    </div>
  );
}
export default NewExpense;
