- [] Build expense form component

  - ✅ add form control elements
  - ✅ review different ways to add CSS styles and choose one to add some styles
  - ✅ validate form input using Zod: required fields, disabled submit button if invalid input, minLength

- [] Build expense list component
- [] Build expense filter component

Qs:

- [] How to validate html select input with Zod? (currently using min which is not addressing the issue)
- [] When trying to test passing an array of objects from App to ExpenseList, type error: ype '{ list: { description: string; amount: number; category: string; }[]; }' is not assignable to type 'IntrinsicAttributes'.Property 'list' does not exist on type 'IntrinsicAttributes'.ts(2322) A: this is because I did not create interface(s) in the child component therefore props we are trying to pass from parent is not assignable

- []

Review

- 🔥 a prop to pass to ExpenseList is an array of expense objects, how to do that? A: create an interface for an expense object, and another interface for an array of them
- 🔥 Why not create a state variable to store expenses after a filter? A: Because this is computable from state variables: expenses and selectedCategory. Therefore it would be redundant.
- 🔥 ExpenseForm uses the enum 'categories' declared in App.tsx. However in App.tsx, it imports ExpenseForm first before executing the line to initialize categories. To solve this, create another module and put categories inside, then import this module before ExpenseForm in App.
- In App.tsx, <ExpenseForm onSubmit={(expense) =>
  setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])>, note how the parameter 'expense' is not declared in App, but still valid, because in ExpenseForm.tsx, when defining the shape of its props from App, there is a parameter to be received. That's why it works here and doesn't matter what I name it.
- 🔥 category: z.enum(categories, {
  errorMap: () => ({ message: "Category is required." }),
  }) - syntax may vary so don't memorize it, being able to understand and find documentation is key
