/**
 * Created by Administrator on 2017/4/2.
 */

import {SparseGraph, adjIterator as SGaI} from '../components/SparseGraph'

const N = 20;
const M = 100;

const g1 = new SparseGraph(N, false);
for (let i = 0; i < M; i ++) {
    const a = Math.floor(Math.random() * N);
    const b = Math.floor(Math.random() * N);
    g1.addEdge(a, b);
}

for ( let v = 0; v < N; v ++) {
    process.stdout.write(v + ": ");
    const adj = new SGaI(g1, v);
    for (let w = adj.begin(); !adj.end(); w = adj.next()) {
        process.stdout.write(w + ' ');
    }
    console.log("");
}