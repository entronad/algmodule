/**
 *
 */

export class UnionFind1 {
    constructor (n) {
        this.id = [];
        this.count = n;
        for (let i = 0; i < n; i ++) {
            this.id[i] = i;
        }
    }

    find(p) {
        return this.id[p];
    }

    isConnected(p, q) {
        return this.find(p) == this.find(q);
    }

    unionElements(p, q) {
        const pID = this.find(p);
        const qID = this.find(q);

        if (pID == qID) {
            return;
        }

        for (let i = 0; i < this.count; i ++) {
            if (this.id[i] == pID) {
                this.id[i] = qID;
            }
        }
    }
}