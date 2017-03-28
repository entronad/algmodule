/**
 *
 */
import {selectionSort} from '../components/selectionSort'
import {generateRandomArray, testSort} from './sortTestHelper'

const n = 100000
const a = generateRandomArray(n, 0, n);

testSort("Selection Sort", selectionSort, a);
