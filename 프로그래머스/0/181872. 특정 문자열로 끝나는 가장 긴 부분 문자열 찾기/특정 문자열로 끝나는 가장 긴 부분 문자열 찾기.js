function solution(myString, pat) {
    var answer = '';
    const index = myString.lastIndexOf(pat);
    return myString.substring(0, index+pat.length);
}