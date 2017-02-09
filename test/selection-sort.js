/**
 *
 */
import {selectionSort} from '../components/selection-sort'
import {generateRandomArray, testSort} from './sort-test-helper'

const n = 100000
const a = generateRandomArray(n, 0, n);

testSort("Selection Sort", selectionSort, a);
