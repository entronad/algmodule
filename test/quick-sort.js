/**
 *
 */

import {mergeSort} from "../components/mergeSort"
import {insertionSort} from "../components/insertionSort"
import {quickSort} from '../components/quickSort'
import {generateRandomArray, testSort, generateNearlyOrderedArray} from './sort-test-helper'

const n = 100000;

const arr1 = generateRandomArray(n, 0, n);
const arr2 = arr1.concat();
const arr3 = arr1.concat();

testSort("Insertion Sort", insertionSort, arr1);
testSort("Merge Sort", mergeSort, arr2);
testSort('Quick Sort', quickSort, arr3);
