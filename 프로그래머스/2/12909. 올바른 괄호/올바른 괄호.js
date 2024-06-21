function solution(s){
    const stack = [];
    
    if(s[0] == ')' || s[s.length-1] == '(') return false;
    
    for(const bracket of s){
        if(bracket == '('){
            stack.push(bracket);
            continue;
        }
        if(stack[stack.length-1] == '(' && bracket == ')'){
            stack.pop()
        }        
    }
    
    return !stack.length
}