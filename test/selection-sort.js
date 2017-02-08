/**
 *
 */
import selectionSort from '../components/selection-sort'

const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

selectionSort(a);
for (let i = 0; i < a.length; i ++) {
    console.log(a[i]);
}