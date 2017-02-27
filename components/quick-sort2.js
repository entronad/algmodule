/**
 *
 */

import {swarp} from './util/swarp'

// 对arr[l...r]部分进行partition2操作
// 返回p,使得arr[l...p-1]<arr[p]; arr[p+1...r]>arr[p]
function __partition2(arr, l, r) {

    swarp(arr, l, Math.floor(Math.random() * (r + 1 - l) + l));

    const v = arr[l];

    // arr[l+1...i] <= v; arr[j...r] >= v
    let i = l + 1;
    let j = r;
    while (true) {
        while (i <= r && arr[i] < v) {
            i ++;
        }
        while (j >= l + 1 && arr[j] > v) {
            j --;
        }
        if (i > j) {
            break;
        }

        swarp(arr, i, j);
        i ++;
        j --;
    }

    swarp(arr, l, j);

    return j;
}

//对arr[l...r]部分进行快速排序
function __quickSort2(arr, l, r) {

    if (l >= r) {
        return;
    }

    const p = __partition2(arr, l, r); // 第p个元素已经就位
    __quickSort2(arr, l, p - 1);
    __quickSort2(arr, p + 1, r);
}

export function quickSort2(arr) {
    __quickSort2(arr, 0, arr.length - 1)
}