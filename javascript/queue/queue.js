// Queue

// A queue is a linear data structure that can be represented by a physical line of people waiting for something.

// Queues are different from stack because deletion takes place at the head (front) end of the queue. This is often called First In First Out (FIFO).

/*
 * ES6 class syntax
 */
class Queue {
  // Array is used to implement queue
  constructor() {
    this.items = [];
  }

  // check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // insert into the queue
  enqueue(item) {
    this.items.push(item);
  }

  // delete from the queue
  dequeue() {
    if (this.isEmpty()) {
      return `Underflow`;
    }
    return this.items.shift();
  }

  // display the contents at the head (front) of the queue (don't delete it)
  peek() {
    return this.items[0];
  }

  // display the contents of the entire queue as a comma-delimited string
  print() {
    return this.items.join(`, `);
  }
}

/*
 * pre-ES6 class syntax (constructor function)
 */
function OldQueue() {
  // Array is used to implement queue
  this.items = [];

  // check if the queue is empty
  this.isEmpty = function() {
    return this.items.length === 0;
  };

  // insert into the queue
  this.enqueue = function(item) {
    this.items.push(item);
  };

  // delete from the queue
  this.dequeue = function() {
    if (this.isEmpty()) {
      return `Underflow`;
    }
    return this.items.shift();
  };

  // display the contents at the head (front) of the queue (don't delete it)
  this.peek = function() {
    return this.items[0];
  };

  // display the contents of the entire queue as a comma-delimited string
  this.print = function() {
    return this.items.join(`, `);
  };
}

module.exports = { Queue, OldQueue };
