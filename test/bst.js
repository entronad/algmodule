/**
 * Created by Administrator on 2017/3/12.
 */

import {BST} from '../components/BST'

const bst = new BST();

for (let i = 0; i < 1000; i ++) {
    bst.insert(i, 'number' + i);
}

console.log(bst.size());
console.log(bst.contain(100));
console.log(bst.search(100));
console.log(bst.contain(2000));
console.log(bst.search(2000));
