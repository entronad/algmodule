/**
 *
 */

import {swarp} from './util/swarp'

export function insertionSort(arr) {
    for (let i = 1; i < arr.length; i ++) {
        for (let j = i; (j > 0) && (arr[j] < arr[j - 1]); j --) {
                swarp(arr, j, j - 1);
        }
    }
}
