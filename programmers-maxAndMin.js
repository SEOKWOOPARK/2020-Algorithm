function solution(s) {
    let answer = [];
    let numberArray = [];
    let sum = '';
    numberArray = s.split(' ').map( number => Number(number));
    
    answer.push(Math.min(...numberArray) + ' ');
    answer.push(Math.max(...numberArray));
    
    for( let i = 0; i < answer.length; i++){
        sum += answer[i];
    }
    
    return sum;
}

// 최댓값과 최솟값
// 문자열 병합 + Math.max Math.min 사용하는 기본문제
