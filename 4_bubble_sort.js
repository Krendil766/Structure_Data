let array = [
    0,
    3,
    2,
    5,
    6,
    8,
    1,
    9,
    4,
    2,
    1,
    2,
    9,
    6,
    4,
    1,
    7, -1, -5,
    23,
    6,
    2,
    35,
    6,
    3,
    32,
];
let count = 0;

function bubleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            count++;
            if (arr[j + 1] < arr[j]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}
console.log(bubleSort(array), count);