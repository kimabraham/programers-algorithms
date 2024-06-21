function solution(strArr) {
    var answer = strArr.map((str, i)=>i % 2 ? str.toUpperCase() : str.toLowerCase());
    return answer;
}