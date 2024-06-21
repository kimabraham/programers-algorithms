function solution(n) {
    var answer = [];
    for(let num of String(n)){
        answer.push(+num)
    }
    return answer.reverse();
}