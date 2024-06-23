function solution(n) {
    const oneCount = n.toString(2).split('').filter(number => number === '1').length;
    let result = n+1;
    
    while(result.toString(2).split('').filter(number => number === '1').length !== oneCount) {
        result++
    }
    
    return result;
}