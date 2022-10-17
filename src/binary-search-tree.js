const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.top = null;
  }

  root() {
    return this.top;
  }

  add(data) {
    this.top = addLowland(this.top, data);

    function addLowland(node, data) {
      if (!node) return new Node(data);

      if (node.data === data) return node;


      if (data < node.data) {
        node.left = addLowland(node.left, data);
      } else {
        node.right = addLowland(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchAvailable(this.top, data);

    function searchAvailable(node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      return data < node.data ? searchAvailable(node.left, data) : searchAvailable(node.right, data);
    }
  }

  find(data) {
    return searchAvailable(this.top, data);

    function searchAvailable(node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      return data < node.data ? searchAvailable(node.left, data) : searchAvailable(node.right, data);
    }

  }

  remove(data) {
    this.top = removeNode(this.top, data);

    function removeNode(node, data) {
      if (!node) return null;
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node;
      } else {
        if (!node.left && !node.right) return null;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight = minFromRight.left
      }
      node.data = minFromRight.data;
      node.right = removeNode(node.right, minFromRight.data);
      return node;
    }
  }

  min() {
    let node = this.top;
    if (!node) {
      return null;
    } else {
      while(node.left) {
        node = node.left;
      }
      return node.data;
    }
  }

  max() {
    let node = this.top;
    if (!node) {
      return null;
    } else {
      while(node.right) {
        node = node.right;
      }
      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};