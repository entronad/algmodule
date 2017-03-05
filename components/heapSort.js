/**
 *
 */

import {swarp} from './util/swarp'

function __shiftDown(arr, n, k) {
    while (2 * k + 1 < n) {
        let j = 2 * k + 1;
        if (j + 1 < n && arr[j + 1] > arr[j]) {
            j += 1;
        }
        if (arr[k] >= arr[j]) {
            break;
        }
        swarp(arr, k, j);
        k = j;
    }
}

export function heapSort(arr) {

    for (let i = Math.floor((arr.length - 1) / 2); i >= 0; i --) {
        __shiftDown(arr, arr.length, i);
    }

    for (let i = arr.length - 1; i > 0; i --) {
        swarp(arr, 0, i);
        __shiftDown(arr, i, 0);
    }
}