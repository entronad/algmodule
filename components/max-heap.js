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
    },

    shiftDown: function (k) {
        while (2 * k <= this.count) {
            let j = 2 * k;
            if (j + 1 <= this.count && this.data[j + 1] > this.data[j]) {
                j += 1;
            }
            if (this.data[k] >= this.data[j]) {
                break;
            }
            swarp(this.data, k, j);
            k = j;
        }
    },
    
    extractMax: function () {
        if (this.count > 0) {
            const ret = this.data[1];
            swarp(this.data, 1, this.count);
            this.count --;
            this.shiftDown(1);
            return ret;
        }
    }
};