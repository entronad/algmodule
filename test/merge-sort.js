/**
 *
 */

import {mergeSort} from "../components/merge-sort"
import {mergeSortBU} from '../components/merge-sort-bu'
import {insertionSort} from "../components/insertion-sort"
import {generateRandomArray, testSort, generateNearlyOrderedArray} from './sort-test-helper'

const n = 50000;

const arr1 = generateRandomArray(n, 0, n);
const arr2 = arr1.concat();
const arr3 = arr1.concat();

testSort("Insertion Sort", insertionSort, arr1);
testSort("Merge Sort", mergeSort, arr2);
testSort('Merge Sort BU', mergeSortBU, arr3);
