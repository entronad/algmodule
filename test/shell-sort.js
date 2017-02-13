/**
 *
 */

import {shellSort} from '../components/shell-sort'
import {generateRandomArray, testSort, generateNearlyOrderedArray, printArray} from './sort-test-helper'

const n = 50;
const arr = generateRandomArray(n, 0, n);
shellSort(arr);

printArray(arr);