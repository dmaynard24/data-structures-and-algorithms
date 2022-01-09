class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.left = null;
    this.right = null;
    this.subtreeSize = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.size = 0;
    this.root = new Node(null);
  }

  insert(data) {
    this.insertAt(this.root, data);
  }

  insertAt(node, data, prevNode) {
    if (!node || !node.data) {
      const newNode = new Node(data);
      newNode.parent = prevNode;
      if (prevNode) {
        if (data < prevNode.data) {
          prevNode.left = newNode;
        } else {
          prevNode.right = newNode;
        }
        prevNode.subtreeSize++;
        let { parent } = prevNode;
        while (parent) {
          parent.subtreeSize++;
          parent = parent.parent;
        }
      } else {
        this.root = newNode;
      }
      this.size++;
    } else if (node.data !== data) {
      if (data < node.data) {
        this.insertAt(node.left, data, node);
      } else {
        this.insertAt(node.right, data, node);
      }
    }
  }

  getSize() {
    return this.size;
  }

  rank(t) {
    return this.rankAt(this.root, t);
  }

  rankAt(node, t) {
    if (!node || !node.data) {
      return 0;
    }
    if (t === node.data) {
      return 1 + this.rankAt(node.left, t);
    }
    if (t < node.data) {
      return this.rankAt(node.left, t);
    }
    if (t > node.data) {
      let sum = 1;
      if (node.left) {
        sum += node.left.subtreeSize;
      }
      return sum + this.rankAt(node.right, t);
    }
    return 0;
  }
}

const binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(30);
binarySearchTree.insert(17);
binarySearchTree.insert(40);
binarySearchTree.insert(14);
binarySearchTree.insert(20);
binarySearchTree.insert(37);
binarySearchTree.insert(48);
console.log(binarySearchTree.rank(39));

module.exports = { BinarySearchTree };
