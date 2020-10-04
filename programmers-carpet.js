function solution(brown, yellow) {
    let final = [];
    let overLap;
    
    if(yellow > 2){
        for( let i = 2 ; i < yellow ; i++){
            if( yellow % i === 0){
                answer.push([ i, yellow / i] );
            }
        }
    }else if(yellow === 2){
        return [4,3];
    }else{
        return [3,3];
    }
    
    for( let j= 0; j < answer.length ; j++){
        answer[j][0] = Math.max(answer[j][0] + 2, answer[j][1] + 2);
        answer[j][1] = Math.min(answer[j][0] + 2, answer[j][1] + 2);
        if( ( answer[j][0] + answer[j][1] - 2) === (brown / 2) ){
            final.push( [answer[j][0], answer[j][1] ])
        }
    }
    
    overLap = final.find( value => value === value);
    
    return overLap;
    
