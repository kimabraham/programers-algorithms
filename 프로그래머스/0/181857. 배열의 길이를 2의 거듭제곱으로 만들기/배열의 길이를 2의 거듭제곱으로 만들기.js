function solution(arr) {
    var answer = [...arr];
    const numArr = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    
    while(!numArr.includes(answer.length)){
        answer.push(0)
    }
    
    return answer;
}