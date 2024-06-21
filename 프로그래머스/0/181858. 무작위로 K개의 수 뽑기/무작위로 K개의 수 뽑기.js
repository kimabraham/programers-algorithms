function solution(arr, k) {
    const removedDuplicatedArr = [...new Set(arr)];
    var answer = [];
    
    for(let i = 0; i < k; i++){
        answer.push(removedDuplicatedArr[i] ?? -1)
    }
    
    return answer;
}