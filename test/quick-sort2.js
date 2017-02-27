/**
 *
 */

import {quickSort} from '../components/quick-sort'
import {quickSort2} from '../components/quick-sort2'
import {generateRandomArray, testSort, generateNearlyOrderedArray} from './sort-test-helper'

const n = 10000;

const arr1 = generateRandomArray(n, 0, 5);
const arr2 = arr1.concat();

testSort('Quick Sort', quickSort, arr1);
testSort('Quick Sort2', quickSort2, arr2);