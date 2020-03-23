// Hashmap

// A hashmap is a data structure that implements an associative array and stores data in (Key, Value) pairs. To access a value, one must know its key.

// In JavaScript, there are two built-in objects that can be used to store data in this structure: Map and WeakMap.

/*
 * ES6 class syntax
 */
class HashMap {
  // Object is used to implement HashMap
  constructor() {
    this.map = {};
    this.size = 0;
  }

  // remove all key/value pairs from the map
  clear() {
    this.map = {};
    this.size = 0;
  }

  // return the map if the element exists or false if the element doesn't exists
  delete(key) {
    if (this.map[key]) {
      delete this.map[key];
      return this;
    }
    return false;
  }

  // return an iterator object that contains an array of [key, value] for each element in the map
  entries() {
    return Object.keys(this.map).reduce((a, c) => {
      a.push([c, this.map[c]]);
      return a;
    }, []);
  }

  // return the value associated to the key, or undefined if there is none
  get(key) {
    return this.map[key];
  }

  // return a boolean value asserting whether a value has been associated to the key in the map or not
  has(key) {
    return this.map[key] !== undefined;
  }

  // returns a new iterator object that contains the keys for each element in the map
  keys() {
    return Object.keys(this.map);
  }

  // sets the value for the key in the map, returns the map
  set(key, value) {
    this.map[key] = value;
    return this.map;
  }

  // returns a new iterator object that contains the values for each element in the map
  values() {
    return Object.values(this.map);
  }
}
