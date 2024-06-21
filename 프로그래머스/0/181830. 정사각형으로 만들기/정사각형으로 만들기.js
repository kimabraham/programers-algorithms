function solution(arr) {
    const copyArr = arr.map(item => [...item]);
    
    const width = copyArr[0].length;
    const height = copyArr.length;
    
    if(width == height){
        return copyArr;
    }
    
    if(width > height){
        while(copyArr.length < width){
            copyArr.push(new Array(width).fill(0));
        }
        
        return copyArr;
    }
    
    const diff = height - width;
    const addArr = new Array(diff).fill(0);
    
    return copyArr.map(item => [...item, ...addArr]);
}