function solution(s){
    var answer = s.toLowerCase().split('').filter(el=>el==='p').length === s.toLowerCase().split('').filter(el=>el==='y').length;
    return answer;
}