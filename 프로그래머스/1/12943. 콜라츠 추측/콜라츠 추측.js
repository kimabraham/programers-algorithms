function solution(num) {
  let number = num;
    
  for(let i = 0; i < 500; i++){
    if(number === 1){
        return i;
    }else{
      if(!(number % 2)){
        number = number / 2;
      }else{
        number = number * 3 + 1;
      }
    }
  }
    
  return -1;
}