const sumAll = function(a, b) {
    
    if (!Number.isInteger(a)) {
        return "ERROR"
    }

    if (!Number.isInteger(b)) {
        return "ERROR"
    }
    
    if (a<0 || b<0){
        return "ERROR"
    }


    if (a<b){
        result = 0
        for (let i = a; i <= b; i++) {
            result = result + i;
        }
        return result;
    }

    if(a>b){
        min = b;
        max = a;
        result = 0;
        for (let j = min; j <= max; j++){
            result = result + j;
        }
        return result;
    }

    
};

// Do not edit below this line
module.exports = sumAll;
