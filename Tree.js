import { Node } from "./Node.js";
import { sortAndRemoveDuplicates } from "./bstFunctions.js";
import { sortedArrayToBSTRecur } from "./bstFunctions.js";

export class Tree {
  constructor(array) {
    const sortedArray = sortAndRemoveDuplicates(array);
    this.root = sortedArrayToBSTRecur(sortedArray, 0, sortedArray.length - 1);
  }

  // Insertion function
  insertToBST(value, root = this.root) {
    //base case
    if (root === null) {
      return new Node(value);
    }
    if (value < root.data) {
      root.left = this.insertToBST(value, root.left);
    } else {
      root.right = this.insertToBST(value, root.right);
    }
    return root;
  }

  //deletion function x is the value
  deletefromBST(root, x) {
    function getSuccessor(curr) {
      curr = curr.right;
      while (curr !== null && curr.left !== null) curr = curr.left;
      return curr;
    }
    if (root === null) return root;

    if (root.data > x) root.left = this.deletefromBST(root.left, x);
    else if (root.data < x) root.right = this.deletefromBST(root.right, x);
    else {
      // Node with 0 or 1 child
      if (root.left === null) return root.right;
      if (root.right === null) return root.left;

      // Node with 2 children
      const succ = getSuccessor(root);
      root.data = succ.data;
      root.right = this.deletefromBST(root.right, succ.data);
    }
    return root;
  }

  //find value function
  find(value, root = this.root) {
    //error in case root value not found
    if (root === null) {
      return "no such value";
    }

    //base case is if root.data is the same as our value
    if (root.data === value) {
      return root;
    }
    if (root.data > value) {
      return this.find(value, root.left);
    } else {
      return this.find(value, root.right);
    }
  }

  levelOrderForEach(callback) {
    try {
      if (!callback) {
        throw new Error("No callback function");
      }

      const NodesQueue = [this.root];

      //starting from root of tree visit node then put children in front of queue
      //visit front of queue and put children in back of queue
      //base case
      const recursiveStep = () => {
        if (NodesQueue.length === 0) {
          return;
        }

        const current = NodesQueue.shift();
        if (current.left) {
          NodesQueue.push(current.left);
        }
        if (current.right) {
          NodesQueue.push(current.right);
        }

        callback(current);
        recursiveStep();
      };
    } catch (e) {
      console.error(e);
    }
  }

  inOrderForEach(callback) {
    try {
      if (!callback) {
        throw new Error("No callback function");
      }

      const recursiveStep = (current) => {
        if (current === null) {
          return;
        }

        recursiveStep(current.left);
        callback(current);
        recursiveStep(current.right);
      };
      recursiveStep(this.root);
    } catch (e) {
      console.error(e);
    }
  }

  postOrderForEach(callback) {
    try {
      if (!callback) {
        throw new Error("No callback function");
      }

      const recursiveStep = (current) => {
        if (current === null) {
          return;
        }

        recursiveStep(current.left);
        recursiveStep(current.right);
        callback(current);
      };
      recursiveStep(this.root);
    } catch (e) {
      console.error(e);
    }
  }

  preOrderForEach(callback) {
    try {
      if (!callback) {
        throw new Error("No callback function");
      }

      const recursiveStep = (current) => {
        if (current === null) {
          return;
        }
        callback(current);
        recursiveStep(current.left);
        recursiveStep(current.right);
      };
      recursiveStep(this.root);
    } catch (e) {
      console.error(e);
    }
  }

  height(value) {
    const data = [];
    const recursiveStep = (current) => {
      if (current.data === value) {
        return;
      }

      recursiveStep(current.left);
      data.push(current.data);
      recursiveStep(current.right);
    };
    recursiveStep(this.root);
    return data.length;
  }
}



    
