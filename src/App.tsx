import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "item1", amount: 10, category: "Groceries" },
    { id: 2, description: "item2", amount: 20, category: "Utilities" },
    { id: 3, description: "item3", amount: 25, category: "Entertainment" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  if (expenses.length === 0) return null;

  return (
    <div>
      <ExpenseForm />
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
};

export default App;
