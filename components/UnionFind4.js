/**
 *
 */

export class UnionFind4 {
    constructor(n) {
        this.parent = [];
        this.rank = [];
        this.count = n;
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }

    find(p) {
        // while (p != this.parent[p]) {
        //     this.parent[p] = this.parent[this.parent[p]];
        //     p = this.parent[p];
        // }
        // return p;

        if (p != this.parent[p]) {
            this.parent[p] = this.parent[this.parent[p]];
        }
        return this.parent[p];
    }

    isConnected(p, q) {
        return this.find(p) == this.find(q);
    }

    unionElements(p, q) {
        const pRoot = this.find(p);
        const qRoot = this.find(q);

        if (pRoot == qRoot) {
            return;
        }

        if (this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        } else if (this.rank[pRoot] > this.rank[qRoot]) {
            this.parent[qRoot] = pRoot;
        } else {
            this.parent[pRoot] = qRoot;
            this.rank[qRoot] += 1;
        }
    }
}