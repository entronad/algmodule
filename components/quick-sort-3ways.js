/**
 *
 */

import {swarp} from './util/swarp'

// 三路快速排序处理 arr[l...r]
// 将arr[l...r]分为 <v;==v;>v 三部分
// 之后递归对 <v; >v 两部分进行继续进行三路快速排序
function __quickSort3Ways(arr, l, r) {

    if (r - l <= 15) {
        return;
    }

    // partition
    swarp(arr, l, Math.floor(Math.random() * (r + 1 - l) + l));

    const v = arr[l];

    let lt = l; // arr[l+1...lt] < v
    let gt = r + 1; // arr[gt...r] > v
    let i = l + 1; // arr[lt+1...i) == v
    while (i < gt) {
        //卫语句
        if (arr[i] < v) {
            swarp(arr, i ++, ++ lt);
            continue;
        }
        if (arr[i] > v) {
            swarp(arr, i, -- gt);
            continue;
        }
        i ++;
    }

    swarp(arr, l, lt);

    __quickSort3Ways(arr, l, lt - 1);
    __quickSort3Ways(arr, gt, r);
}

export function quickSort3Ways(arr) {
    __quickSort3Ways(arr, 0, arr.length - 1);
}