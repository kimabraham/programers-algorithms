function solution(a, b) {
    const answer = new Date(`2016-${a}-${b}`).getDay();
    const DAYS = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    
    return DAYS[answer];
}