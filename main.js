import { Tree } from "./Tree.js";
const prettyPrint = (node, prefix = '', isLeft = true) => {
            if (node === null) {
                return;
            }
            if (node.right !== null) {
                prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
            }
            console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
            if (node.left !== null) {
                prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
            }
};

const newRandomArray = () => {
    let i = 0;
    let array = [];
    while(i < 100) {
        array.push(Math.floor(Math.random() * 100));
        i++;
    }
    console.log(array)
    return array;
}
const unbalanceArray = () => {
    let i = 0;
    let array = [];
    while(i < 10) {
        array.push(Math.floor(Math.random() * 500));
        i++;
    }
    console.log(array)
    return array;
}


function logger(current) {
    console.log(current);
}

const test = new Tree(newRandomArray());
console.log(test.isBalanced());
test.levelOrderForEach(logger);
test.preOrderForEach(logger);
test.postOrderForEach(logger);
test.inOrderForEach(logger);
unbalanceArray().forEach((element) => {
    test.root = test.insertToBST(element, test.root)
})
console.log(test.isBalanced());
prettyPrint(test.root)
test.rebalance();
prettyPrint(test.root)
test.levelOrderForEach(logger);
test.preOrderForEach(logger);
test.postOrderForEach(logger);
test.inOrderForEach(logger);
