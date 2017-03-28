/**
 *
 */

export class UnionFind2 {
    constructor(n) {
        this.parent = [];
        this.count = n;
        for (let i = 0; i < n; i++) {
            this.parent[i] = i;
        }
    }

    find(p) {
        while (p != this.parent[p]) {
            p = this.parent[p];
        }
        return p;
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

        this.parent[pRoot] = qRoot;
    }
}