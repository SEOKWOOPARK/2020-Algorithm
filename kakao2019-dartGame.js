function solution(dartResult) {
    let answer = [];
    let i = 0;
    let dartArray = dartResult.split('');    
    
    for(let j = 0; j < dartArray.length ; j++){
        if(dartArray[j] === '1' && dartArray[j+1] === '0'){
            dartArray[j+1] = '10';
        }
        
    }
    function option(input){
        if( input === '*'){
            answer[answer.length - 1] *= 2;
            answer[answer.length - 2] *= 2; 
        }else if(input === '#'){ 
            answer[answer.length - 1] = -answer[answer.length - 1];
        }    
    }
    
    while(i < dartArray.length){
        if(dartArray[i] === 'D'){
            answer.push(Math.pow( Number(dartArray[i-1]), 2));
       	    option(dartArray[i+1]);
        }else if(dartArray[i] === 'S'){
            answer.push(Number(dartArray[i-1]));
            option(dartArray[i+1]);    
        }else if(dartArray[i] === 'T'){
            answer.push(Math.pow( Number(dartArray[i-1]), 3));
            option(dartArray[i+1]); 
        }
        i++;
    }
    
    answer = answer.reduce( (previous, current) => previous + current, 0);
    return answer;
}
