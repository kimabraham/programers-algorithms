function solution(numbers, n) {
    var answer = 0;
    for(const number of numbers){
        if(answer > n){
            return answer;
        }
        answer += number
    }
    return answer;
}