/**
 *
 */

import {MaxHeap} from './MaxHeap'

export function heapSort1(arr) {
    const maxHeap = new MaxHeap();
    for (let i = 0; i < arr.length; i++) {
        maxHeap.insert(arr[i]);
    }
    for (let i = arr.length - 1; i >= 0; i --) {
        arr[i] = maxHeap.extractMax();
    }
}