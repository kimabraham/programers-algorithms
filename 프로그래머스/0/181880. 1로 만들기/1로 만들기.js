function solution(num_list) {
    var answer = 0;
    
    while(!num_list.every(el => el === 1)){
        for(let i = 0; i < num_list.length; i++){
            if(num_list[i]===1){
                continue;
            }
            if(num_list[i] % 2){
                num_list[i] = (num_list[i] - 1) /2
                answer++
            }else{
                num_list[i] = num_list[i] / 2
                answer++
            }
        }
    }
    
    return answer;
}