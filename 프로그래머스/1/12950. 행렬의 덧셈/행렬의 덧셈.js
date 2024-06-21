function solution(arr1, arr2){
    const result = [...arr1];
    
    for(let i = 0; i < result.length; i++){
      for(let j = 0; j < result[i].length; j++){
        result[i][j] = arr1[i][j] + arr2[i][j]
      }
    }

    return result;
}