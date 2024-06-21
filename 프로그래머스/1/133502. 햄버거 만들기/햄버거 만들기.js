function solution(ingredient) {
    const burgerPattern = [1, 2, 3, 1];
    let stack = []; 
    let answer = 0;

    for (let ing of ingredient) {
        stack.push(ing);
        if (stack.length >= burgerPattern.length && 
            stack.slice(-burgerPattern.length).every((value, index) => value === burgerPattern[index])) {
            answer++;
            stack.splice(-burgerPattern.length);
        }
    }

    return answer;
}