function solution(absolutes, signs) {
    const result = absolutes.map((el, i) => signs[i] ? el : el * -1).reduce((acc, cur) => acc + cur);
    
    return result;
}