import React, { useState } from "react";

import ExpenseList from "./ExpenseList";
import Card from "../UI/CardContainer";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChartData from "./ExpenseChartData";

import "./Expense.css";
import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";

function Expenses(props) {
  const [newYear, setNewYear] = useState("2021");
  function onFilterChangeHandler(newFilterYear) {
    setNewYear(newFilterYear);
  }

  const filteredList = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === newYear;
  });

  return (
    <Card className="expense">
      <ExpenseFilter
        selectedFilter={newYear}
        onFilterChange={onFilterChangeHandler}
      />
      <ExpenseChartData expenses={filteredList} />
      <ExpenseList list={filteredList} />
    </Card>
  );
}

export default Expenses;
