/**
 * Created by Administrator on 2017/3/5.
 */

export function binarySearch(arr, target) {
    let l = 0;
    let r = n - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] === target) {
            return mid;
        }

        if (target < arr[mid]) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return -1;
}
