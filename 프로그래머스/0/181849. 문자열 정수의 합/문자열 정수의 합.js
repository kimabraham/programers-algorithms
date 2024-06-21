function solution(num_str) {
    var answer = 0;
    for(const char of num_str){
        answer += +char
    }
    return answer;
}