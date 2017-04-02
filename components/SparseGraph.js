/**
 * Created by Administrator on 2017/4/2.
 */

export class SparseGraph {
    constructor(n, directed) {
        this.n = n;
        this.m = 0;
        this.directed = directed;
        this.g = [];
        for (let i = 0; i < n; i ++) {
            this.g[i] = [];
        }
    }

    V() {
        return this.n;
    }

    E() {
        return this.m;
    }

    hasEdge(v, w) {
        for (let i = 0; i < this.g[v].length; i ++) {
            if (this.g[v][i] == w) {
                return true;
            }
        }
        return false;
    }

    addEdge(v, w) {
        this.g[v].push(w);
        if (v != w && !this.directed) {
            this.g[w].push(v);
        }
        this.m ++;
    }
}

export class adjIterator {
    constructor(graph, v) {
        this.v = v;
        this.index = 0;
        this.G = graph;
    }

    begin() {
        this.index = 0;
        if (this.G.g[this.v].length > 0) {
            return this.G.g[this.v][this.index];
        }
        return -1;
    }

    next() {
        this.index ++;
        if (this.index < this.G.g[this.v].length) {
            return this.G.g[this.v][this.index];
        }
        return -1;
    }

    end() {
        return this.index >= this.G.g[this.v].length;
    }
}