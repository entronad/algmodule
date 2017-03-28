/**
 *
 */

import {mergeSort} from "../components/mergeSort"
import {mergeSortBU} from '../components/mergeSortBU'
import {insertionSort} from "../components/insertionSort"
import {generateRandomArray, testSort, generateNearlyOrderedArray} from './sortTestHelper'

const n = 50000;

const arr1 = generateRandomArray(n, 0, n);
const arr2 = arr1.concat();
const arr3 = arr1.concat();

testSort("Insertion Sort", insertionSort, arr1);
testSort("Merge Sort", mergeSort, arr2);
testSort('Merge Sort BU', mergeSortBU, arr3);
