function solution(s) {
    var result = [];
    const array = s.split(' ');
    
    for(const word of array){
        let answer = ''
        for(let i = 0; i < word.length; i++){
            if(i % 2) {
                answer += word[i].toLowerCase();
            }else{
                answer += word[i].toUpperCase();
            }
        }
        result.push(answer);
    }
    
    return result.join(' ');
}