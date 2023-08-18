import React, { useState } from "react";
import "../components/Track.css";

const Track = () => {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleEditExpense = (id) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    if (expenseToEdit) {
      setDescription(expenseToEdit.description);
      setAmount(expenseToEdit.amount);
      setEditingId(id);
    }
  };

  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  
    // Reset input fields and editing state if needed
    if (editingId === id) {
      setEditingId(null);
      setDescription("");
      setAmount("");
    }
  };
  

  const handleAddExpense = (event) => {
    event.preventDefault();
    if (description && amount) {
      if (editingId !== null) {
        const updatedExpenses = expenses.map((expense) =>
          expense.id === editingId
            ? { ...expense, description, amount }
            : expense
        );
        setExpenses(updatedExpenses);
        setEditingId(null);
      } else {
        const newExpense = {
          id: new Date().getTime(),
          description,
          amount
        };
        setExpenses([...expenses, newExpense]);
      }
      setDescription("");
      setAmount("");
    }
  };

  // ... handleEditExpense and handleDeleteExpense functions ...

  return (
    <div className="Track">
      <div className="d-flex justify-content-center mt-5">
        <form className="expense-form" onSubmit={handleAddExpense}>
          <div className="mb-3">
            <label htmlFor="exampleInputText1" className="form-label">
              Expense Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText1"
              aria-describedby="textHelp"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAmount" className="form-label">
              Amount
            </label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                id="exampleInputAmount"
                aria-describedby="amountHelp"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>
          <button type="submit" className="btn ">
            {editingId !== null ? "Save Expense" : "Add Expense"}
          </button>
        </form>
      </div>
      <div className="expense-list">
       
        <h2>Expenses</h2>
        
  <ul>
    {expenses.map((expense) => (
      <li key={expense.id}>
        <span>{ expense.description }</span>
        <span>${ expense.amount }</span>
        <button onClick={() => handleEditExpense(expense.id)}>
          Edit
        </button>
        <button onClick={() => handleDeleteExpense(expense.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
</div>


    </div>
  );
};

export default Track;
