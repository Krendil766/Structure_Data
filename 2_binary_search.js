const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let count = 0;

const binarySearch = (arr, num) => {
    let start = 0;
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;
    while (found === false && start <= end) {
        count++;
        middle = Math.floor((start + end) / 2);
        if (arr[middle] === num) {
            found = true;
            position = middle;
            return position;
        }
        if (num > arr[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return position;
}
console.log(binarySearch(array, 8), count);