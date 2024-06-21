function solution(strArr) {
    var answer = [];
    
    for(const string of strArr){
        if(!string.includes('ad')){
            answer.push(string)
        }
    }
    
    return answer;
}