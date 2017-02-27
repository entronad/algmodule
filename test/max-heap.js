/**
 *
 */

import {MaxHeap} from '../components/max-heap'

const maxheap = new MaxHeap();
for (let i = 0; i < 15; i ++) {
    maxheap.insert(Math.floor(Math.random() * 100));
}
console.log(maxheap.data);