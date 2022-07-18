import ExpenseItem from "./ExpenseItem";

import "./ExpenseList.css";

function ExpensesList(props) {
  if (props.list.length == 0) {
    return <h2 className="expense-list__fallback">No expenses found</h2>;
  }

  return (
    <ul className="expense-list">
      {props.list.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
}

export default ExpensesList;
