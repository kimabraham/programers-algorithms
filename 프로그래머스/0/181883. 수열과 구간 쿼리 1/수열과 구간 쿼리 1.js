function solution(arr, queries) {
    var answer = arr.slice();
    queries.forEach(([s, e]) => {
        for(let i = s; i < e+1; i++){
            answer[i]++
        }
    })
    return answer;
}