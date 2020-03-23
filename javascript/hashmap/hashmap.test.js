const { HashMap } = require(`./hashmap`);

const myHashMap = new HashMap();

test(`setting key/value of { 'name': 'Dave' } and { 'age': '26' } will update the size of myHashMap to 2`, () => {
  myHashMap.set(`name`, `Dave`);
  myHashMap.set(`age`, 26);
  expect(myHashMap.size).toBe(2);
});

test(`getting the value associated to the key 'name' will be 'Dave'`, () => {
  expect(myHashMap.get(`name`)).toBe(`Dave`);
});

test(`gettings the entries in myHashMap will be [['name', 'Dave'], ['age', 26]]`, () => {
  expect(myHashMap.entries()).toStrictEqual([
    [`name`, `Dave`],
    [`age`, 26],
  ]);
});

test(`getting the array of keys will be ['name', 'age']`, () => {
  expect(myHashMap.keys()).toStrictEqual([`name`, `age`]);
});

test(`getting the array of values will be ['Dave', 26]`, () => {
  expect(myHashMap.values()).toStrictEqual([`Dave`, 26]);
});

test(`deleting the key/value pair for 'age' will return myHashMap updated without it`, () => {
  const expectedHashMap = new HashMap();
  expectedHashMap.set(`name`, `Dave`);
  expect(myHashMap.delete(`age`)).toStrictEqual(expectedHashMap);
});

test(`checking if myHashMap has a value associated to the key 'age' will return false`, () => {
  expect(myHashMap.has(`age`)).toBe(false);
});

test(`clearing a HashMap will remove all key/value pairs from it and reset its size to 0`, () => {
  myHashMap.clear();
  expect(myHashMap.size).toBe(0);
});
