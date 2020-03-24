const { LinkedList } = require(`./linkedlist`);

const myLinkedList = new LinkedList();

test(`adding a new node to the list will increase the size of the list to 1`, () => {
  myLinkedList.add(5);
  expect(myLinkedList.size).toBe(1);
});
