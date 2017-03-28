/**
 *
 */

import {MaxHeap} from '../components/MaxHeap'

const maxheap = new MaxHeap();
for (let i = 0; i < 15; i ++) {
    maxheap.insert(Math.floor(Math.random() * 100));
}
console.log(maxheap.data);

while (!maxheap.isEmpty()) {
    console.log(maxheap.extractMax());
}