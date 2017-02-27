/**
 *
 */

import {swarp} from './util/swarp'

//基于构造函数创建对象
export function MaxHeap() {
    this.data = new Array();
    this.count = 0;
}

MaxHeap.prototype = {

    constructor: MaxHeap,

    size: function () {
        return this.count;
    },

    isEmpty: function () {
        return this.count === 0;
    },

    shiftUp: function (k) {
        while (k > 1 && this.data[Math.floor(k / 2)] < this.data[k]) {
            swarp(this.data, Math.floor(k / 2), k);
            k = Math.floor(k / 2);
        }
    },

    insert: function (item) {
        this.data[this.count + 1] = item;
        this.count ++;
        this.shiftUp(this.count);
    }
};