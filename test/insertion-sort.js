/**
 *
 */


import {selectionSort} from '../components/selection-sort'
import {insertionSort} from '../components/insertion-sort'
import {generateRandomArray, testSort} from './sort-test-helper'

const n = 10000;
const arr = generateRandomArray(n, 0, n);
const arr2 = arr.concat();

testSort("Insertion Sort", insertionSort, arr);
testSort("Selection Sort", selectionSort, arr2);
