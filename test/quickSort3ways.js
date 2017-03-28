/**
 *
 */

import {quickSort} from '../components/quickSort'
import {quickSort2} from '../components/quickSort2'
import {quickSort3Ways} from '../components/quickSort3Ways'
import {generateRandomArray, testSort, generateNearlyOrderedArray, printArray} from './sortTestHelper'

const n = 5000;

const arr1 = generateRandomArray(n, 0, n);
const arr2 = arr1.concat();
const arr3 = arr1.concat();

testSort('Quick Sort', quickSort, arr1);
testSort('Quick Sort2', quickSort2, arr2);
testSort('Quick Sort 3Ways', quickSort3Ways, arr3);

printArray(arr3);