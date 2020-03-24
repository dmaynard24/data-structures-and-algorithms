const { Queue } = require(`./queue`);

const myQueue = new Queue();

test(`the isEmpty method will return true when myQueue is empty`, () => {
  expect(myQueue.isEmpty()).toBe(true);
});

test(`enqueueing 3 items into myQueue and calling the peek method will return the first item`, () => {
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  expect(myQueue.peek()).toBe(1);
});

test(`calling the dequeue method on myQueue will remove the first item and return its value`, () => {
  expect(myQueue.dequeue()).toBe(1);
});

test(`caling the print method on myQueue will return '2, 3'`, () => {
  expect(myQueue.print()).toBe(`2, 3`);
});
