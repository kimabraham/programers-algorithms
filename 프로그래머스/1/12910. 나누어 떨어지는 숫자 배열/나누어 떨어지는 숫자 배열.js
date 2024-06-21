function solution(arr, divisor) {
    var answer = arr.filter(el=> !(el % divisor));
    return answer.length ? answer.sort((a, b)=>a-b) : [-1];
}