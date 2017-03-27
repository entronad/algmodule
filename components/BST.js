/**
 *
 */

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
    }

    copy() {
        const dup = new Node(this.key, this.value);
        dup.left = this.left;
        dup.right = this.right;
        return dup;
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
        if (node != null ) {
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

    levelOrder(callback) {

        // JS中队列可通过Array实现
        const q = [];
        q.push(this.root);
        while (q.length != 0) {
            const node = q.shift();
            callback(node.key);
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
    }

    minimum() {
        if (this.count != 0) {
            const minNode = this.__minimum(this.root);
            return minNode.key;
        }
    }

    __minimum(node) {
        if (node.left == null) {
            return node;
        }
        return this.__minimum(node.left);
    }

    maximum() {
        if (this.count != 0) {
            const minNode = this.__maximum(this.root);
            return minNode.key;
        }
    }

    __maximum(node) {
        if (node.right == null) {
            return node;
        }
        return this.__maximum(node.right);
    }

    removeMin() {
        if (this.root) {
            this.root = this.__removeMin(this.root);
        }
    }

    __removeMin(node) {
        if (node.left == null) {
            const rightNode = node.right;
            this.count --;
            return rightNode;
        }
        node.left = this.__removeMin(node.left);
        return node;
    }

    removeMax() {
        if (this.root) {
            this.root = this.__removeMax(this.root);
        }
    }

    __removeMax(node) {
        if (node.right == null) {
            const leftNode = node.left;
            this.count --;
            return leftNode;
        }
        node.right = this.__removeMax(node.right);
        return node;
    }

    remove(key) {
        this.root = this.__remove(this.root, key);
    }

    __remove(node, key) {

        if (node == null) {
            return null;
        }

        if (key < node.key) {
            node.left = this.__remove(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.__remove(node.right, key);
            return node;
        } else {

            if (node.left == null) {
                const rightNode = node.right;
                this.count --;
                return rightNode;
            }

            if (node.right == null) {
                const leftNode = node.left;
                this.count --;
                return leftNode;
            }

            const successor = this.__minimum(node.right).copy();
            this.count ++;

            successor.right = this.__removeMin(node.right);
            successor.left = node.left;

            this.count --;

            return successor;
        }
    }

}