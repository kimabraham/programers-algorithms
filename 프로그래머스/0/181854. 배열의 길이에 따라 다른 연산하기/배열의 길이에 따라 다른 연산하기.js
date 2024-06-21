function solution(arr, n) {
    const length = arr.length;
    if(length % 2){
        return arr.map((v, i) => i % 2 === 0 ? v + n : v)
    }else{
        return arr.map((v, i) => i % 2 ? v + n : v)
    }
}