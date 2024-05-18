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


// Task 2

function formatArrayStrings(arrStr, number) {
    let string = []

    for (let i = 0; i < arrStr.length; i++) {
        let str = arrStr[i]
        let num = number[i]

        if (num % 2 == 0) {
            string[string.length] = str.toUpperCase()
        } else {
            string[string.length] = str.toLowerCase()
        }
    }

    return string
}

const a = formatArrayStrings(["hi", "hello", "hey", "sup", "App"], processArray([1,2,3,4,5]))
console.log(a)
