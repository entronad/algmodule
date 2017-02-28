/**
 *
 */

import {quickSort} from '../components/quick-sort'
import {quickSort2} from '../components/quick-sort2'
import {quickSort3Ways} from '../components/quick-sort-3ways'
import {generateRandomArray, testSort, generateNearlyOrderedArray} from './sort-test-helper'
import {heapSort1} from '../components/heap-sort1'

const n = 50000;

const arr1 = generateRandomArray(n, 0, 5);
const arr2 = arr1.concat();
const arr3 = arr1.concat();
const arr4 = arr1.concat();

testSort('Quick Sort', quickSort, arr1);
testSort('Quick Sort2', quickSort2, arr2);
testSort('Quick Sort 3Ways', quickSort3Ways, arr3);
testSort('Heap Sort', heapSort1, arr4);