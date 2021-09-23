//数组两个元素互换

const a = ['l', 'x', 'i', 4, 2]
const swapArr = (arr, index1, index2) => {
    arr[index2] = arr.splice(index1, 1, arr[index2])[0]
    return arr
}
console.log(swapArr(a, 1, 2))
console.log(swapArr(a, 2, 4))