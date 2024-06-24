function solution(sides) {
    const longest = Math.max(...sides);
    const short = Math.min(...sides);

    let count = 0;
    
    for (let c = longest - short + 1; c < longest + short; c++) {
        count++;
    }

    return count;
}