function solution(left, right) {
    var answer = 0;
    
    for(let i = left; i <= right; i++){
        let number = [];
        
        for(let j = 1; j <= i; j++){
            if(!(i % j)){
              number.push(j);
            }
        }
        
        if(number.length % 2){
            answer -= i
        }else{
            answer += i
        }
        
    }
    
    return answer;
}