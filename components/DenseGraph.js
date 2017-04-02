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
            g[i] = [];
            for (let j = 0; j < n; j ++) {
                g[i][j] = false;
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
            g[w][v] = true;
        }
        this.m ++;
    }
}