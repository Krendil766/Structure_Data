const recursionFactorial = (n) => {
    if (n === 1) {
        return 1
    }
    return n * recursionFactorial(n - 1)
}
console.log(recursionFactorial(5));

const reacursionFibonachi = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return reacursionFibonachi(n - 1) + reacursionFibonachi(n - 2)
}
console.log(reacursionFibonachi(5));