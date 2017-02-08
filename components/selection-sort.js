/**
 * Basic selection sort
 */

import swarp from './util/swarp'

export function selectionSort(arr) {

    for (let i = 0; i < arr.length; i ++) {

        let minIndex = i;
        for (let j = i + 1; j < n; j ++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swarp (arr[i], arr[minIndex]);
    }
}