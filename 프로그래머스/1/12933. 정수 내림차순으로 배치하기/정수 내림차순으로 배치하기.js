function solution(n) {
    var answer = String(n).split('').map((v)=>+v);
    return +(answer.sort((a,b)=>b-a).join(''));
}