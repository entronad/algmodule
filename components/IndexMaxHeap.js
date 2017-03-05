/**
 *
 */

import {swarp} from './util/swarp'

//基于构造函数创建对象
export function IndexMaxHeap() {
    this.data = [];
    this.indexes = [];
    this.reverse = [];
    this.count = 0;
}

IndexMaxHeap.prototype = {

    constructor: IndexMaxHeap,

    size: function () {
        return this.count;
    },

    isEmpty: function () {
        return this.count === 0;
    },

    shiftUp: function (k) {
        while (k > 1 && this.data[this.indexes[Math.floor(k / 2)]] < this.data[this.indexes[k]]) {
            swarp(this.indexes, Math.floor(k / 2), k);
            this.reverse[this.indexes[k / 2]] = k / 2;
            this.reverse[this.indexes[k]] = k;
            k = Math.floor(k / 2);
        }
    },

    //索引i从0开始
    insert: function (i, item) {
        if (i + 1 >= 1) {
            i += 1;
            this.data[i] = item;
            this.indexes[this.count + 1] = i;
            this.reverse[i] = this.count + 1;

            this.count ++;
            this.shiftUp(this.count);
        }
    },

    shiftDown: function (k) {
        while (2 * k <= this.count) {
            let j = 2 * k;
            if (j + 1 <= this.count && this.data[this.indexes[j + 1]] > this.data[this.indexes[j]]) {
                j += 1;
            }
            if (this.data[this.indexes[k]] >= this.data[this.indexes[j]]) {
                break;
            }
            swarp(this.indexes, k, j);
            this.reverse[this.indexes[k]] = k;
            this.reverse[this.indexes[j]] = j;
            k = j;
        }
    },
    
    extractMax: function () {
        if (this.count > 0) {
            const ret = this.data[this.indexes[1]];
            swarp(this.indexes, 1, this.count);
            this.reverse[this.indexes[1]] = 1;
            this.reverse[this.indexes[this.count]] = 0;
            this.count --;
            this.shiftDown(1);
            return ret;
        }
    },

    extractMaxIndex: function () {
        if (this.count > 0) {
            const ret = this.indexes[1] - 1;
            swarp(this.indexes, 1, this.count);
            this.reverse[this.indexes[1]] = 1;
            this.reverse[this.indexes[this.count]] = 0;
            this.count --;
            this.shiftDown(1);
            return ret;
        }
    },

    contain: function (i) {
        return (i + 1 >= 1) && (this.reverse[i + 1] != 0);
    },

    getItem: function (i) {
        if (this.contain(i)) {
            return this.data[i + 1];
        }
    },

    change: function (i, newItem) {
        if (this.contain(i)) {
            i += 1;
            this.data[i] = newItem;

            // for (let j = 1; j <= this.count; j ++) {
            //     if (this.indexes[j] == i) {
            //         this.shiftUp(j);
            //         this.shiftDown(j);
            //         return;
            //     }
            // }
            let j = this.reverse[i];
            this.shiftUp(j);
            this.shiftDown(j);
        }
    }
};