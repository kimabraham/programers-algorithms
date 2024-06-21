function solution(myString, pat) {
    var answer = myString.toLowerCase().indexOf(pat.toLowerCase());
    console.log(answer)
    return answer === -1 ? 0 : 1;
}