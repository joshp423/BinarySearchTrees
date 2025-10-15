import { Node } from "./Node.js";

export class Tree {
    constructor(array){
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        let smallest = 0;
        let rootNode = null;
        array.sort((a, b) => {return a - b});
        let i = 0; let j = 1;
        while (i < array.length && j < array.length - 1) {
            if (array[i] === array[j]) {
                array.splice([j], 1);
                i++;
                j++;
            }
            i++;
            j++;
        }
        array.foreach((element) => {
            
        })
    }
}
        

        

// smallest = new Node(array[i]);