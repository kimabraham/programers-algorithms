function solution(numbers) {
    const nums = [0,1,2,3,4,5,6,7,8,9]
    var answer = nums.filter(el => !numbers.includes(el)).reduce((acc, cur) => acc + cur);
    return answer;
}