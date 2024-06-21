function solution(n) {
    var answer = '';
    let i = 0;
    while(i < n){
      if(i%2){
        answer += '박'
      }else{
        answer += '수'
      }
      i++
    }
    
    return answer;
}