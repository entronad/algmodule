/**
 *
 */

class Node {
    constructor(key, value) {
        this.Key = key;
        this.Value = value;
        this.left = this;
        this.right = null;
    }
}

export class BST {
    constructor() {
        this.root = null;
        this.count = 0;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }
}