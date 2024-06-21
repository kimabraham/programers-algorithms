function solution(myString) {
    const arr = myString.split('x').filter((v)=>v)
    var answer = arr.sort((a, b) => a.localeCompare(b));
    return answer;
}