function solution(N, stages) {
    let answer = [];
    let i = 1;
    let failRate = [];
    let count = 0;
    let stageLength = stages.length;
    
    stages.sort( (a, b) => a - b);
    
    while(i <= N ){
        count = 0;
        for( let j = 0 ; j < stages.length ; j++){
            if(stages[j] === i ){
                count++;
            }
        }
        
        failRate.push( [i, count / stageLength] );    
        stageLength -= count;
        i++;
    }
    
    failRate.sort( (a,b) => b[1] - a[1] );
    // failRate.sort( (a,b) => a[1]=== b[1] ? a[0] - b[0] : b[1] - a[1] );
    failRate.map( value => answer.push(value[0]) );
    
    return answer;
}

