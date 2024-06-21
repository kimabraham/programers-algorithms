function solution(s) {
    const result = [0, 0]
    let arr = s.split('');
    let i = 0
        
    while(arr.join('') !== '1'){
        result[1] += arr.filter(number => number == '0').length;
        
        const length = arr.filter(number => number == '1').length.toString(2);
        
        arr = length.split('');
        
        result[0] += 1;
    }
    
    return result;
}