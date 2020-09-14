function solution(numbers, target) {
    let answer = 0;
    
    function recur(index, sum){
        if( index === numbers.length){
            if(sum === target ){
                answer += 1;
            }
            return answer;
        }
        
        recur(index + 1, sum + numbers[index]);
        recur(index + 1, sum - numbers[index]);
    }
    
    recur(0, 0);
    
    return answer;
}


// numbers의 각 요소가 +,-가 되는 경우로 분리해서 생각
// 순환 호출(재귀 함수)로 +,- 케이스를 분류
// recur 함수의 재귀를 통해 k라는 숫자를 0부터 numbers.length - 1 까지 진행

//마지막으로 +,- 가 번갈아 계산되고, 첫 요소의 +,- 분류를 위해서 recur 함수를 2번씩 순환하고 index가 되는 numbers.length가 되는 순간 누적한 sum이 target과 일치할 때 answer를 하나씩 올려서 카운팅하고 반환
