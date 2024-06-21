function solution(arr) {
    var answer = arr.map((num)=>num>=50 ? num%2 ? num : num/2 : num%2 ? num*2 : num )
    
    return answer;
}