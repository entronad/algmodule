/**
 *
 */

import {quickSort} from '../components/quickSort'
import {quickSort2} from '../components/quickSort2'
import {generateRandomArray, testSort, generateNearlyOrderedArray} from './sortTestHelper'

const n = 10000;

const arr1 = generateRandomArray(n, 0, 5);
const arr2 = arr1.concat();

testSort('Quick Sort', quickSort, arr1);
testSort('Quick Sort2', quickSort2, arr2);