function solution(x) {
    var arr = String(x).split('').map((v)=>+v)
    var digitSum = arr.reduce((acc, cur)=>acc+cur, 0)
    return !(x%digitSum);
}