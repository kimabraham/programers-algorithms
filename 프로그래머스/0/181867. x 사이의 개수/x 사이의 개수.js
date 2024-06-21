function solution(myString) {
    const arr = myString.split('x')
    var answer = arr.map((v) => v.length);
    return answer;
}