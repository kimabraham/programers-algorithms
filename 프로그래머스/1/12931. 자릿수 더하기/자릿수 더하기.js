function solution(n)
{
    var answer = 0;

    for(let num of String(n)){
        answer += +num
    }

    return answer;
}