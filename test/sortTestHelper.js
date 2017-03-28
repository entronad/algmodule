/**
 *
 */

import {swarp} from '../components/util/swarp'

/**
 * random integer Array[n] in [rangeL, rangeR]
 * @param n
 * @param rangeL
 * @param rangeR
 */
export function generateRandomArray(n, rangeL, rangeR) {

    const arr = new Array(n);
    for (let i = 0; i < n; i ++) {
        arr[i] = Math.floor(Math.random() * (rangeR + 1 - rangeL) + rangeL);
    }
    return arr;

}

export function generateNearlyOrderedArray(n, swapTimes) {

    const arr = new Array(n);
    for (let i = 0; i < n; i ++) {
        arr[i] = i;
    }
    for (let i = 0; i < swapTimes; i ++) {
        const posx = Math.floor(Math.random() * (n + 1));
        const posy = Math.floor(Math.random() * (n + 1));
        swarp(arr, posx, posy);
    }
    return arr;
}

export function printArray(arr) {
    for (let v of arr) {
        process.stdout.write(v + ', ');
    }
    process.stdout.write('\n');
}

function isSorted(arr) {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

export function testSort(sortName, sort, arr) {
    const startTime = new Date();
    sort(arr);
    const endTime = new Date();
    if (!isSorted(arr)) {
        console.log(sortName + ': Error');
        return
    }
    console.log(sortName + ': ' + (endTime - startTime) / 1000 + 's');
}
