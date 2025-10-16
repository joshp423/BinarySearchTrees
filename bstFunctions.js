    import { Node } from "./Node.js";
    
    export function sortAndRemoveDuplicates(array) {
        //sort array
        array.sort((a, b) => {return a - b});
        //remove duplicates
        let i = 0; 
        while (i < array.length) {
            if (array[i] === array[i+1]) {
                array.splice(i + 1, 1);
            }
            else {
                i++;
            }
        }
        return array;
    }


// Recursive Function to Create BST
    export function sortedArrayToBSTRecur(arr, start, end) {
        if (start > end) return null;

        let mid = start + Math.floor((end - start) / 2);
        let root = new Node(arr[mid]);

        // Divide from middle element
        root.left = sortedArrayToBSTRecur(arr, start, mid - 1);
        root.right = sortedArrayToBSTRecur(arr, mid + 1, end);

        return root;
    }