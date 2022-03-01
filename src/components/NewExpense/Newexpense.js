import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./Expenseform";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const addNewExpensesHandler = () => {
    setShowForm(true);
  };

  const cancelAddExpense = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && (
        <button type="button" onClick={addNewExpensesHandler}>
          ADD NEW EXPENSES
        </button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelAddExpense}
        />
      )}
    </div>
  );
};

export default NewExpense;
