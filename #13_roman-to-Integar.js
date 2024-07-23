/**
 * @param {string} s
 * @return {number}
 */

const romanToInteger = {
    'I' : 1,
    'V' : 5,
    'X' : 10,
    'L' : 50,
    'C' : 100,
    'D'  : 500,
    'M': 1000
}
var romanToInt = function(s) {

    let integer = 0

    for (let i=0; i<s.length; i++){
        let current = romanToInteger[s[i]]
        let next =  romanToInteger[s[i+1]]

        if (current < next)
        {integer-=current} 
        else {integer+=current}
    }

    return integer
};

let s = 'III'
console.log(romanToInt(s))