function solution(a, b) {
    var answer = a.map((el, i) => el * b[i]);
    return answer.reduce((acc, cur)=>acc+cur);
}