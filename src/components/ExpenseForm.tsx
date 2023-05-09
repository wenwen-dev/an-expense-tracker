import "./ExpenseForm.css";

const ExpenseForm = () => {
  return (
    <>
      <form>
        <div>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" />
        </div>
        <div>
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <select id="category">
            <option value="">--Please choose an option--</option>
            <option value="grocery">Grocery</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
