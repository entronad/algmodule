/**
 *
 */

import {MaxHeap} from './max-heap'

export function heapSort1(arr) {
    const maxHeap = new MaxHeap();
    for (let i = 0; i < n; i++) {
        maxHeap.insert(arr[i]);
    }
    for (let i = n - 1; i >= 0; i --) {
        arr[i] = maxHeap.extractMax();
    }
}