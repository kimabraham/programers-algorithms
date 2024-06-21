function solution(binomial) {
    const [first, operator, second] = binomial.split(' ');
    switch(operator){
        case('+'):
            return +first + +second;
        case('-'):
            return first - second;
        case('*'):
            return first * second;
        case('/'):
            return first / second;
        default:
            break;
    }
}