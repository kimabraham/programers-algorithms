function solution(myString) {
    var answer = '';
    for(const char of myString){
        if(char === 'a' || char === 'A'){
            answer += 'A';
            continue;
        }
        answer += char.toLowerCase();
    }
    return answer;
}