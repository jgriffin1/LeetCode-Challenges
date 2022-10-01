/**
 * @param {number} num
 * @return {string}
 */

var numberToWords = function(num) {
    let s = '';
    let chunks = [];
    const placeValues = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
    //separate num into three digits chunks from end to start
    for(var i = num.toString().length; i>0; i-=3){
        chunks.push(num.toString().substring(i-3, i))
    }
    
    //convert chucks to numbers and add placeValue
    for(var i =0; i<chunks.length; i++){
        let td = threeDigits(chunks[i]);
        if(!!td){
            s=threeDigits(chunks[i], placeValues[i]) +' ' + placeValues[i] + ' ' + s;
        }
    }
    
    return s.trim();
};

/*
    num = 1 to 3 digit number
*/
var threeDigits = function(num) {
    let s = '';
    for(var i = 0; i<num.toString().length; i++){
        let n = num.toString()[num.toString().length-1-i];
        if(i==0){//ones
            
            if(!!num.toString()[num.toString().length-2] && num.toString()[num.toString().length-2]==1 && numToWord(n)!='Zero' ){//values from 11 to 19
                s= numToWord(num.toString().substring(num.toString().length-2,num.toString().length));
                i++;//skip tens value;
            }else if(numToWord(n)!='Zero' || num.toString().length==1){//regualar ones place
                s = numToWord(n);
            }
        }else if (i==1){//tens
            let tc = tensConst(n);
            if(!tc){
               continue; 
            }else if(!!s){//if the ones spot put something in here, make sure to add the space and concantenate
                s = tc + " " + s;
            }else{
                s = tc;
            }
            
        }else if (i==2){//hundreds
             if(!!s && numToWord(n)!='Zero'){
                 s = numToWord(n) + ' Hundred ' + s;
             }else if(numToWord(n)!='Zero'){
                 s = numToWord(n) + ' Hundred';
             }
        }
    }
    
    return s;
};

function numToWord(num){
    switch(num){
        case '0': return 'Zero';
        case '1': return 'One';
        case '2': return 'Two';
        case '3': return 'Three';
        case '4': return 'Four';
        case '5': return 'Five';
        case '6': return 'Six';
        case '7': return 'Seven';
        case '8': return 'Eight';
        case '9': return 'Nine';
        case '11': return 'Eleven';
        case '12': return "Twelve";
        case '13': return 'Thirteen';
        case '14': return 'Fourteen';
        case '15': return 'Fifteen';
        case '16': return 'Sixteen';
        case '17': return 'Seventeen';
        case '18': return 'Eighteen';
        case '19': return 'Nineteen';
            
    }
}

function tensConst(num){
    switch(num){
        case '0': return '';
        case '1': return 'Ten';
        case '2': return 'Twenty';
        case '3': return 'Thirty';
        case '4': return 'Forty';
        case '5': return 'Fifty';
        case '6': return 'Sixty';
        case '7': return 'Seventy';
        case '8': return 'Eighty';
        case '9': return 'Ninety';
    }
}