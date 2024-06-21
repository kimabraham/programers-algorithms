function solution(n) {
    var answer = Math.sqrt(n)%1 ? -1 : (Math.sqrt(n)+1)**2;
    return answer;
}