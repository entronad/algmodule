/**
 *
 */

import {BST} from '../components/BST'

const bst = new BST();

for (let i = 0; i < 10; i ++) {
    bst.insert(i, 'number' + i);
}

bst.preOrder(key => process.stdout.write(key + ' '));
console.log("");

console.log("min: " + bst.minimum());
console.log("max: " + bst.maximum());

bst.removeMin();
bst.preOrder(key => process.stdout.write(key + ' '));
console.log("");

bst.removeMax();
bst.preOrder(key => process.stdout.write(key + ' '));
console.log("");

bst.remove(5);
bst.preOrder(key => process.stdout.write(key + ' '));
console.log("");