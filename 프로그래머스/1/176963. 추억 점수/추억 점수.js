function solution(name, yearning, photo) {
    var answer = [];
    let obj={};
    name.forEach((name, i)=>obj[name]=yearning[i]);
    for(let arr of photo){
        let score = 0
        for(let person of arr){
            if(obj[person]){
                score += obj[person]
            }
        }
        answer.push(score)
    }
    return answer
}