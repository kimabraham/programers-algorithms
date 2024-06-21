function solution(arr) {
    if(arr.length === 1){
        return [-1]
    }
    const minimum = Math.min(...arr);
    
    return arr.filter(el=>el !== minimum);
}