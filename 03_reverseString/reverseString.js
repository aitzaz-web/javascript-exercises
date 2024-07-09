const reverseString = function(word) {
    
    let result = ''
    let x = word.length
    for(let i =0; i < x; i++){
        result = result+word.charAt(x-i-1);
    }
    return result

};

// Do not edit below this line
module.exports = reverseString;
