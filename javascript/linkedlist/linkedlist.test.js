const { LinkedList } = require(`./linkedlist`);

const myLinkedList = new LinkedList();

test(`calling the print method on an empty linked list will return ''`, () => {
  expect(myLinkedList.print()).toBe(``);
});

test(`adding a new node to the list will increase the size of the list to 1`, () => {
  myLinkedList.add(5);
  expect(myLinkedList.size).toBe(1);
});

test(`inserting a new node at index 0 will replace the existing head and move it forward`, () => {
  myLinkedList.insertAt(0, 3);
  const expectedLinkedList = new LinkedList();
  expectedLinkedList.add(3);
  expectedLinkedList.add(5);
  expect(myLinkedList).toStrictEqual(expectedLinkedList);
});

test(`inserting a new node into myLinkedList at index 1 will add an additional node in the second position`, () => {
  myLinkedList.insertAt(1, 7);
  const expectedLinkedList = new LinkedList();
  expectedLinkedList.add(3);
  expectedLinkedList.add(7);
  expectedLinkedList.add(5);
  expect(myLinkedList).toStrictEqual(expectedLinkedList);
  expect(myLinkedList.size).toBe(3);
});

test(`inserting a new node into myLinkedList at index 3 will add an additional node in the fourth position`, () => {
  myLinkedList.insertAt(3, 9);
  const expectedLinkedList = new LinkedList();
  expectedLinkedList.add(3);
  expectedLinkedList.add(7);
  expectedLinkedList.add(5);
  expectedLinkedList.add(9);
  expect(myLinkedList).toStrictEqual(expectedLinkedList);
  expect(myLinkedList.size).toBe(4);
});

test(`inserting a new node into an empty linked list at index 1 will do nothing`, () => {
  const newLinkedList = new LinkedList();
  newLinkedList.insertAt(1, 7);
  const expectedLinkedList = new LinkedList();
  expect(newLinkedList).toStrictEqual(expectedLinkedList);
});

test(`removing a node at index 1 will remove the node at the second position`, () => {
  myLinkedList.removeAt(1);
  const expectedLinkedList = new LinkedList();
  expectedLinkedList.add(3);
  expectedLinkedList.add(5);
  expectedLinkedList.add(9);
  expect(myLinkedList).toStrictEqual(expectedLinkedList);
  expect(myLinkedList.size).toBe(3);
});

test(`removing the first node with data: 8 will do nothing if the linked list does not contain the node`, () => {
  myLinkedList.removeData(8);
  const expectedLinkedList = new LinkedList();
  expectedLinkedList.add(3);
  expectedLinkedList.add(5);
  expectedLinkedList.add(9);
  expect(myLinkedList).toStrictEqual(expectedLinkedList);
  expect(myLinkedList.size).toBe(3);
});

test(`removing the first node with data: 5 will reduce the size of the list`, () => {
  myLinkedList.removeData(5);
  const expectedLinkedList = new LinkedList();
  expectedLinkedList.add(3);
  expectedLinkedList.add(9);
  expect(myLinkedList).toStrictEqual(expectedLinkedList);
  expect(myLinkedList.size).toBe(2);
});

test(`printing the list will return '3, 9'`, () => {
  expect(myLinkedList.print()).toBe(`3, 9`);
});
