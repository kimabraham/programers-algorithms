function solution(d, budget) {
    let count = 0;
    const copyArr = [...d];
    copyArr.sort((a, b) => a - b);
    
    for (let i = 0; i < copyArr.length; i++) {
        if (budget >= copyArr[i]) {
            budget -= copyArr[i];
            count++;
        } else {
            break;
        }
    }
    
    return count;
}