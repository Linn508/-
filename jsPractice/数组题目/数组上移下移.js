const a = [3, 2, 5, 7, '']
const upGo = (arr, index) => {
    if (index == 0) {
        arr.push(arr.shift())
    } else {
        arr[index] = arr.splice(index - 1, 1, arr[index])[0]
    }
    return arr
}

const downGo = (arr, index) => {
    if (index == arr.length - 1) {
        arr.unshift(arr.splice(index, 1)[0])
    } else {
        arr[index] = arr.splice(index + 1, 1, arr[index])[0]
    }
    return arr
}

// console.log(upGo(a, 1))
console.log(downGo(a, 2))