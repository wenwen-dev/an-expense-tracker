- [] Build expense form component

  - ✅ add form control elements
  - ✅ review different ways to add CSS styles and choose one to add some styles
  - ✅ validate form input using Zod: required fields, disabled submit button if invalid input, minLength

- [] Build expense list component
- [] Build expense filter component

Qs:

- [] How to validate html select input with Zod? (currently using min which is not addressing the issue)
- [] When trying to test passing an array of objects from App to ExpenseList, type error: ype '{ list: { description: string; amount: number; category: string; }[]; }' is not assignable to type 'IntrinsicAttributes'.Property 'list' does not exist on type 'IntrinsicAttributes'.ts(2322) A: this is because I did not create interface(s) in the child component therefore props we are tring to pass from parent is not assignable

- []

Review

- a prop to pass to ExpenseList is an array of expense objects, how to do that? A: create an interface for an expense object, and another interface for an array of them
