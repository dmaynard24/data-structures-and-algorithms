// LinkedList

// A Linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to its next.

// This structure allows for efficient insertion and deletion of nodes from any position in thr sequence during iteration. However, a drawback of linked lists is that access time is linear because you must walk each node in the sequence when searching it.

/*
 * ES6 class syntax for a singly-linked node
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/*
 * ES6 class syntax
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = new Node(data);
    }
    this.size++;
  }

  prepend(data) {
    const newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
    this.size++;
  }

  insertAt(index, data) {
    if (index <= this.size) {
      const newNode = new Node(data);

      if (index === 0) {
        if (!this.head) {
          this.head = new Node(data);
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
      } else {
        let i = 0;
        let current = this.head;
        while (current.next != null && i < index - 1) {
          current = current.next;
          i++;
        }
        newNode.next = current.next;
        current.next = newNode;
      }

      this.size++;
    }
  }

  removeAt(index) {
    if (this.size >= index) {
      let i = 0;
      let current = this.head;
      while (i < index - 1) {
        current = current.next;
        i++;
      }
      current.next = current.next.next;
      this.size--;
    }
  }

  removeData(data) {
    if (this.size > 0) {
      if (this.head.data === data) {
        this.head = this.head.next;
        this.size--;
      } else {
        let current = this.head;
        while (current.next != null) {
          if (current.next.data === data) {
            current.next = current.next.next;
            this.size--;
            break;
          }
          current = current.next;
        }
      }
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    if (this.isEmpty()) {
      return ``;
    }
    let result = this.head.data;
    let current = this.head;
    while (current.next != null) {
      result += `, ${current.next.data}`;
      current = current.next;
    }
    return result;
  }
}

module.exports = { Node, LinkedList };
