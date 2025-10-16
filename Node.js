export class Node {
  constructor(data) {
    if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
    }
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
