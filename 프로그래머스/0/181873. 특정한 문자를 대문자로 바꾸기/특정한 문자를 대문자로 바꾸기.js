function solution(my_string, alp) {
    var answer = '';
    for(const char of my_string){
        if(char.toLowerCase() === alp){
            answer += alp.toUpperCase();
            continue;
        }
        answer += char
    }
    return answer;
}