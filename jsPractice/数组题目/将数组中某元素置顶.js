//将数组中的一个元素 置顶操作

const a = [3, 2, 5, 'll', 34]
const changeToFirstLocation = (arr, index) => {
    //解法一：
    // let temp = arr[0]
    // arr[0] = arr[index]
    // arr[index] = temp
    // return arr

    // 解法二：unshift返回数组长度
    //shift返回数组元素
    if (index != 0) {
        arr.unshift(arr.splice(index, 1)[0])
    }
    return arr
}
console.log('a:', changeToFirstLocation(a, 3))