// Stack

// A stack is a linear data structure that can be represented by a physical stack or pile of objects.

// Stacks are different from queues because insertion and deletion takes place at one end called the top of the stack. This is often called a Last In First Out (LIFO).

/*
 * ES6 class syntax
 */
class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // insert into the stack
  push(item) {
    this.items.push(item);
  }

  // delete from the stack
  pop() {
    if (this.isEmpty()) {
      return `Underflow`;
    }
    return this.items.pop();
  }

  // display the contents of the top of the stack (don't delete it)
  peek() {
    return this.items[this.items.length - 1];
  }

  // display the contents of the entire stack as a comma-delimited string
  print() {
    return this.items.join(`, `);
  }
}

/*
 * pre-ES6 class syntax (constructor function)
 */
const OldStack = () => {
  // Array is used to implement stack
  this.items = [];

  // check if the stack is empty
  this.isEmpty = function() {
    return this.items.length === 0;
  };

  // insert into the stack
  this.push = function(item) {
    this.items.push(item);
  };

  // delete from the stack
  this.pop = function() {
    if (this.isEmpty()) {
      return `Underflow`;
    }
    return this.items.pop();
  };

  // display the contents of the top of the stack (don't delete it)
  this.peek = function() {
    return this.items[this.items.length - 1];
  };

  // display the contents of the entire stack as a comma-delimited string
  this.print = function() {
    return this.items.join(`, `);
  };
};

module.exports = { Stack, OldStack };
