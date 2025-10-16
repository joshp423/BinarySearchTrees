import { Tree } from "./Tree.js";
const testArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
const test = new Tree(testArray);
// test.root = test.insertToBST(10, test.root);
// const prettyPrint = (node, prefix = '', isLeft = true) => {
//             if (node === null) {
//                 return;
//             }
//             if (node.right !== null) {
//                 prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
//             }
//             console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
//             if (node.left !== null) {
//                 prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//             }
// };
// prettyPrint(test.root)
// test.root = test.deletefromBST(test.root, 10)
// console.log(test.find(7))

test.height(23);
