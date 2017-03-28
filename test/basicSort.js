/**
 *
 */

import {selectionSort} from '../components/selectionSort'
import {insertionSort} from '../components/insertionSort'
import {bubbleSort} from '../components/bubbleSort'
import {shellSort} from '../components/shellSort'
import {generateRandomArray, testSort, generateNearlyOrderedArray} from './sortTestHelper'

const n = 10000;

const arrRand = generateRandomArray(n, 0, n);
const arrRand2 = arrRand.concat();
const arrRand3 = arrRand.concat();
const arrRand4 = arrRand.concat();

const arrNO = generateNearlyOrderedArray(n, 1000);
const arrNO2 = arrNO.concat();
const arrNO3 = arrNO.concat();
const arrNO4 = arrNO.concat();

console.log("\nRandom Array");
testSort("bubbleSort", bubbleSort, arrRand);
testSort("Insertion Sort", insertionSort, arrRand2);
testSort("Selection Sort", selectionSort, arrRand3);
testSort("ShellSort", shellSort, arrRand4);

console.log("\nNearlyOrdered Array");
testSort("bubbleSort", bubbleSort, arrNO);
testSort("Insertion Sort", insertionSort, arrNO2);
testSort("Selection Sort", selectionSort, arrNO3);
testSort("ShellSort", shellSort, arrNO4);