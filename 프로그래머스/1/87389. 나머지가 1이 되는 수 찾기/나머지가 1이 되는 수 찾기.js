function solution(n) {
    var answer = 0;
    for(i=2; i<n; i++){
        if((n-1)%i===0){
            answer = i;
            break;
        }
    }
    return answer;
}