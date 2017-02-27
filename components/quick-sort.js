/**
 *
 */

import {swarp} from './util/swarp'

// 对arr[l...r]部分进行partition操作
// 返回p,使得arr[l...p-1]<arr[p]; arr[p+1...r]>arr[p]
function __partition(arr, l, r) {

    swarp(arr, l, Math.floor(Math.random() * (r + 1 - l) + l));

    const v = arr[l];

    // arr[l+1...j] < v; arr[j+1...i) > v
    let j = l;
    for (let i = l + 1; i <= r; i ++) {
        if (arr[i] < v) {
            swarp(arr, ++ j, i);
        }
    }

    swarp(arr, l, j);

    return j;
}

//对arr[l...r]部分进行快速排序
function __quickSort(arr, l, r) {

    if (l >= r) {
        return;
    }

    const p = __partition(arr, l, r); // 第p个元素已经就位
    __quickSort(arr, l, p - 1);
    __quickSort(arr, p + 1, r);
}

export function quickSort(arr) {
    __quickSort(arr, 0, arr.length - 1)
}