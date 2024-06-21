function solution(phone_number) {
    var length = phone_number.length;
    return '*'.repeat(length-4) + phone_number.slice(length-4);
}