/**
 *
 */

export function shellSort(arr) {
    const n = arr.length;
    let h = 1;
    while (h < n / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (let i = h; i < n; i ++) {
            const e = arr[i];
            let j;
            for (j = i; (j > 0) && (arr[j - 1] > e); j --) {
                arr[j] = arr[j - 1];
            }
            arr[j] = e;
        }
        h /= 3;
    }
}