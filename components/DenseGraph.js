/**
 * Created by Administrator on 2017/4/2.
 */

export class DenseGraph {
    constructor(n, directed) {
        this.n = n;
        this.m = 0;
        this.directed = directed;
        this.g = [];
        for (let i = 0; i < n; i ++) {
            this.g[i] = [];
            for (let j = 0; j < n; j ++) {
                this.g[i][j] = false;
            }
        }
    }

    V() {
        return this.n;
    }

    E() {
        return this.m;
    }

    hasEdge(v, w) {
        return this.g[v][w];
    }

    addEdge(v, w) {
        if (this.hasEdge(v, w)) {
            return;
        }
        this.g[v][w] = true;
        if (!this.directed) {
            this.g[w][v] = true;
        }
        this.m ++;
    }
}

export class adjIterator {
    constructor(graph, v) {
        this.v = v
        this.index = 0
        this.G = graph
    }

    begin() {
        this.index = -1
        return this.next()
    }

    next() {
        for (this.index += 1; this.index < this.G.V(); this.index ++) {
            if(this.G.g[this.v][this.index]) {
                return this.index
            }
        }
        return -1
    }

    end() {
        return this.index >= this.G.V()
    }
}