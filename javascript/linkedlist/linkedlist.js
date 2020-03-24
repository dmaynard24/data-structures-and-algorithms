// Linked List

// A Linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to its next.

// This structure allows for efficient insertion and deletion of nodes from any position in thr sequence during iteration. However, a drawback of linked lists is that access time is linear because you must walk each node in the sequence when searching it.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
}
