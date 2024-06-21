function solution(my_string) {
    var answer = [];
    const arr = my_string.split(' ')
    
    for(const str of arr){
        if(str){
            answer.push(str)
        }
    }    
    
    return answer;
}