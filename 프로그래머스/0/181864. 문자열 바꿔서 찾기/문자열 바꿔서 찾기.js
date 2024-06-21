function solution(myString, pat) {
    const chagedString = myString.split('').map((v) => v==='A' ? 'B' :'A').join('');
    
    var answer = chagedString.includes(pat);
    
    return +answer;
}