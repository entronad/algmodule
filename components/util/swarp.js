/**
 * Swarp two elements of an array
 */

export function swarp(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};
