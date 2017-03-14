/**
 *
 */

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
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

    insert(key, value) {
        this.root = this.__insert(this.root, key, value);
    }

    // 向以node为根的二叉搜索树中，插入节点(key, value)
    // 返回插入新节点后的二叉搜索树的根
    __insert(node, key, value) {
        if (node === null) {
            this.count += 1;
            return new Node(key, value);
        }

        if (key === node.key) {
            node.value = value;
        } else if (key < node.key) {
            node.left = this.__insert(node.left, key, value);
        } else {
            node.right = this.__insert(node.right, key, value);
        }

        return node;
    }

    contain(key) {
        return this.__contain(this.root, key);
    }

    __contain(node, key) {
        if (node ===null) {
            return false;
        }

        if (key == node.key) {
            return true;
        }
        if (key < node.key) {
            return this.__contain(node.left, key);
        }
        return this.__contain(node.right, key);
    }

    search(key) {
        return this.__search(this.root, key);
    }

    __search(node, key) {
        if (node === null) {
            return null;
        }

        if (key === node.key) {
            return node.value;
        }
        if (key < node.key) {
            return this.__search(node.left, key);
        }
        return this.__search(node.right, key);
    }

    // 遍历的操作为传入的callback

    preOrder(callback) {
        this.__preOrder(this.root, callback);
    }

    __preOrder(node, callback) {
        if (node != null) {
            callback(node.key);
            this.__preOrder(node.left, callback);
            this.__preOrder(node.right, callback);
        }
    }

    inOrder(callback) {
        this.__inOrder(this.root, callback);
    }

    __inOrder(node, callback) {
        if (node != null) {
            this.__inOrder(node.left, callback);
            callback(node.key);
            this.__inOrder(node.right, callback);
        }
    }

    postOrder(callback) {
        this.__postOrder(this.root, callback);
    }

    __postOrder(node, callback) {
        if (node != null) {
            this.__postOrder(node.left, callback);
            this.__postOrder(node.right, callback);
            callback(node.key);
        }
    }
}