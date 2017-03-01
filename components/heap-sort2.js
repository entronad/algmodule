/**
 *
 */

import {MaxHeap} from './max-heap'

export function heapSort2(arr) {
    const maxHeap = new MaxHeap();
    maxHeap.initData(arr);

    for (let i = arr.length - 1; i >= 0; i --) {
        arr[i] = maxHeap.extractMax();
    }
}