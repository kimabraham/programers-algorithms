function solution(arr) {
    const stack = [];
    
    for(const number of arr){
        if(!stack.length){
            stack.push(number);
            continue;
        }
        if(stack[stack.length-1] !== number){
            stack.push(number);
            continue;
        }
    }
    
    return stack
}