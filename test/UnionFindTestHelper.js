/**
 *
 */

import {UnionFind1} from '../components/UnionFind1'
import {UnionFind2} from '../components/UnionFind2'
import {UnionFind3} from '../components/UnionFind3'
import {UnionFind4} from '../components/UnionFind4'

export function testUF1(n) {
    const uf = new UnionFind1(n);
    const startTime = new Date();
    for (let i = 0; i < n; i ++) {
        const a = Math.random() * (n - 1);
        const b = Math.random() * (n - 1);
        uf.unionElements(a, b);
    }
    for (let i = 0; i < n; i ++) {
        const a = Math.random() * (n - 1);
        const b = Math.random() * (n - 1);
        uf.isConnected(a, b);
    }
    const endTime = new Date();

    console.log('UF1' + ': ' + (endTime - startTime) / 1000 + 's');
}

export function testUF2(n) {
    const uf = new UnionFind2(n);
    const startTime = new Date();
    for (let i = 0; i < n; i ++) {
        const a = Math.random() * (n - 1);
        const b = Math.random() * (n - 1);
        uf.unionElements(a, b);
    }
    for (let i = 0; i < n; i ++) {
        const a = Math.random() * (n - 1);
        const b = Math.random() * (n - 1);
        uf.isConnected(a, b);
    }
    const endTime = new Date();

    console.log('UF2' + ': ' + (endTime - startTime) / 1000 + 's');
}

export function testUF3(n) {
    const uf = new UnionFind3(n);
    const startTime = new Date();
    for (let i = 0; i < n; i ++) {
        const a = Math.random() * (n - 1);
        const b = Math.random() * (n - 1);
        uf.unionElements(a, b);
    }
    for (let i = 0; i < n; i ++) {
        const a = Math.random() * (n - 1);
        const b = Math.random() * (n - 1);
        uf.isConnected(a, b);
    }
    const endTime = new Date();

    console.log('UF3' + ': ' + (endTime - startTime) / 1000 + 's');
}

export function testUF4(n) {
    const uf = new UnionFind4(n);
    const startTime = new Date();
    for (let i = 0; i < n; i ++) {
        const a = Math.random() * (n - 1);
        const b = Math.random() * (n - 1);
        uf.unionElements(a, b);
    }
    for (let i = 0; i < n; i ++) {
        const a = Math.random() * (n - 1);
        const b = Math.random() * (n - 1);
        uf.isConnected(a, b);
    }
    const endTime = new Date();

    console.log('UF4' + ': ' + (endTime - startTime) / 1000 + 's');
}