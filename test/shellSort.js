/**
 *
 */

import {shellSort} from '../components/shellSort'
import {generateRandomArray, testSort, generateNearlyOrderedArray, printArray} from './sortTestHelper'

const n = 50;
const arr = generateRandomArray(n, 0, n);
shellSort(arr);

printArray(arr);