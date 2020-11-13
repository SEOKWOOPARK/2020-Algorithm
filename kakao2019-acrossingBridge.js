function solution(stones, k) {
    let possible = 0;
    let indexArray = [];
    
    function zero(array){
        let count = 0;
        array.sort( (a, b) => a - b);
        for( let j = 0; j < array.length; j++){
            if( array[j] === array[j+1] - 1 ){
                count++;
                if( count === k - 1) return count;
            }else{
                count = 0;
            }
        }
        return 0;
    }
    
    while( possible >= 0 ){
        for( let i = 0; i < stones.length; i++){
            if(stones[i] !== 0){
                stones[i]--;
            }else if(stones[i] === 0 && !indexArray.find( value => value === i)){
                indexArray.push(i);
            }
        }
        
        if( zero(indexArray) === k - 1) break;
        possible++;
    }
    
    return possible;
}


// 테스트케이스 실행은 되지만 정확성 점수가 다소 깍이고 효율성에서 시간초과 발생.
