function solution(d, budget) {
    let answer = 0;
    
    if(budget < Math.min(...d) ){
        return 0;
    } 
    
    while(budget >= 0){
        let min = Math.min(...d);
        budget -= min;
        d.splice( d.indexOf(min) , 1);
        answer++;
        
        let extraMin = Math.min(...d);
        
        if( budget < extraMin ) break;
    }
    
    return answer;
}


// 아예 처음부터 가장 적은 액수를 요구하는 원소가 budget을 넘는 케이스를 넣었어야 하는데 빼먹고 시작해서 테스트 케이스가 하나 오류 발생. 이 점을 추가해서 해결.

