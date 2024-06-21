function solution(t, p) {
    const array = []
    const tLength = t.length;
    const pLength = p.length;
    
    for(let i = 0; i <= tLength - pLength; i++){
      array.push(+t.slice(i, i+pLength))
    }
        
    return array.filter(el => el <= +p).length;
}