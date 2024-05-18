// Task 1

function processArray(arrNum) {
    let newArr = []

    for (let i of arrNum) {
        if (i % 2 == 0) {
            newArr[newArr.length] = i * i
        } else {
            newArr[newArr.length] = i * 3
        }

    }
    return newArr
}

console.log(processArray([1,2,3,4,5,10,21,30]))
