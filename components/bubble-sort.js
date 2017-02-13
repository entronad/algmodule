/**
 *
 */

import {swarp} from './util/swarp'

export function bubbleSort(arr) {
    let swapped;
    let n = arr.length;
    do {
        swapped = false;
        for (let i = 1; i < n; i ++) {
            if (arr[i - 1] > arr[i]) {
                swarp(arr, i - 1, i);
                swapped = true;
            }
        }
        n --;
    } while (swapped);
}
