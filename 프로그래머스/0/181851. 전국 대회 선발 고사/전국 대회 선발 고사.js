function solution(rank, attendance) {
    var [a, b, c] = rank.filter((_, i) => attendance[i]).sort((a, b) => a - b);
    
    return 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
}