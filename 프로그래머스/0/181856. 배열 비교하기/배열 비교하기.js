function solution(arr1, arr2) {
    if(arr1.length !== arr2.length){   
        return arr1.length > arr2.length ? 1 : -1
    }
    const arr1result = arr1.reduce((acc, cur) => acc + cur);
    const arr2result = arr2.reduce((acc, cur) => acc + cur);
    return arr1result === arr2result ? 0 : arr1result > arr2result ? 1 : -1
}