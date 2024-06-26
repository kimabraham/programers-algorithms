function solution(spell, dic) { 
    const str = spell.sort().join('');
    
    for (const word of dic) {
        if (word.length !== spell.length) {
            continue;
        }
        
        if (word.split('').sort().join('') === str) {
            return 1;
        }
    }
    return 2;
}