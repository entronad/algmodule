/**
 *
 */

export function insertionSort(arr) {
    for (let i = 1; i < arr.length; i ++) {
        const e = arr[i];
        let j;
        for (j = i; (j > 0) && (arr[j - 1] > e); j --) {
                arr[j] = arr[j - 1];
        }
        arr[j] = e;
    }
}
