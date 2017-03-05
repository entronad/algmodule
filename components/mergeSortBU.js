/**
 *
 */

import {__merge} from './mergeSort'

export function mergeSortBU(arr) {

    const n = arr.length;
    for (let sz = 1; sz <= n; sz += sz) {
        for (let i = 0; i + sz < n; i += sz + sz) {
            //对arr[i...i+sz-1]和arr[i+sz...i+2*sz-1]进行归并
            __merge(arr, i, i + sz - 1, Math.min(i + sz + sz - 1, n - 1));
        }
    }
}