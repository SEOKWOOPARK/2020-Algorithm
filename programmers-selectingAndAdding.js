function solution(numbers) {
    let answer = [];
    let i = 0;
    let count = 0;
    
    while(i <= numbers.length - 1){
        for( let j = i + 1; j < numbers.length; j++ ){
            let combination = numbers[i] + numbers[j];
            if(answer.indexOf(combination) < 0){
                answer.push(combination);
            }
        }
        answer.sort((a, b) => a - b);
        i++;
    }
    
    return answer;
}

// 방문되는 배열 원소가 다른 특정 배열에도 있는지 확인할 때 find보단 indexOf 메서드를 사용해야 한다.
