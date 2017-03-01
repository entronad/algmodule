/**
 *
 */

import {quickSort} from '../components/quick-sort'
import {quickSort2} from '../components/quick-sort2'
import {quickSort3Ways} from '../components/quick-sort-3ways'
import {generateRandomArray, testSort, generateNearlyOrderedArray} from './sort-test-helper'
import {heapSort1} from '../components/heap-sort1'
import {heapSort2} from '../components/heap-sort2'
import {heapSort} from '../components/heap-sort'

const n = 500000;

const arr1 = generateRandomArray(n, 0, n);
const arr2 = arr1.concat();
const arr3 = arr1.concat();
const arr4 = arr1.concat();


testSort('Quick Sort 3Ways', quickSort3Ways, arr1);
testSort('Heap Sort 1', heapSort1, arr2);
testSort('Heap Sort 2', heapSort2, arr3);
testSort('Heap Sort', heapSort, arr4)