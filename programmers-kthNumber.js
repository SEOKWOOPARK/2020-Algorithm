function solution(array, commands) {
    let answer = [];
    let filtered = [];
    
    function compare(a,b){
        if(a > b){
            return 1;
        }
        else if( a === b){
            return 0
        }
        else{
            return -1;
        }
    }
    
    for( let i = 0; i< commands.length ; i++){
        filtered = array.slice(commands[i][0]-1, commands[i][1]) 
        filtered.sort(compare);
        answer.push(filtered[commands[i][2]-1]);
    }
    
    return answer;
}

// k 번쨰 수 of 정렬

//commands 요소의 0,1 번째 기준으로 array를 자른 배열을
//filtered 배열에 할당. 배열의 index는 0부터 시작이므로 commands[i][0]에서 하나를 빼준다. slice()는 두 번째 파라미터 전까지 자르기 때문에 그대로 commands[i][1].

// compare 함수를 통해서 오름차순 정렬. 명시적으로 함수를 따로 선언했지만 간단히 선언 없이 filtered.sort( (a,b) => a - b );를 통해서도 정렬 가능.

// 정렬을 마친 filtered 배열 중에서 commands 배열 요소의 2번째 인덱스를 answer에 넣고 최종 return 한다. answer가 배열인 이유는 commands의 원소들이 복수라는 점때문이다.
