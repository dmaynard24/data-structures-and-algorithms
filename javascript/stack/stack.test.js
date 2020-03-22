const { Stack } = require(`./stack`);

const myStack = new Stack();

test(`expects that the isEmpty method will return true when myStack is empty`, () => {
  expect(myStack.isEmpty()).toBe(true);
});

test(`expects that pushing 3 items into myStack and calling the peek method will return the last item`, () => {
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  expect(myStack.peek()).toBe(3);
});

test(`expects that calling the pop method on myStack will remove the last item and return its value`, () => {
  expect(myStack.pop()).toBe(3);
});

test(`expects that calling the print method on myStack will return '1, 2'`, () => {
  expect(myStack.print()).toBe(`1, 2`);
});
