function solution(sizes) {
    const arr = sizes.map((size) => [size[0], size[1]]);
    
    for(size of arr){
        if(size[0] < size[1]) {
            const width = size[0]
            size[0] = size[1];
            size[1] = width;
        }
    }
    
    const widths = arr.map(size => size[0]);
    const heights = arr.map(size => size[1]);
    
    const maxWidth = Math.max(...widths);
    const maxHeight = Math.max(...heights);
    
    return maxWidth * maxHeight;
}