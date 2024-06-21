function solution(price, money, count) {
    let totalPrice = 0;
    for(let i = 1; i <= count; i++){
      totalPrice += price * i;
    }
    const cost = totalPrice - money;
    
    return cost > 0 ? cost : 0;
}