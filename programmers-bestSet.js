function solution(n, s) {
    let answer = [];
    let i = 0;
    let average = Math.floor(s / n);
    let extra = s % n;
    
    if( average === 0) return [-1];
    
    while( i < n){
        answer.push(average);
        i++;
    }
    
    if(extra){
        for( let j = 0; j < extra; j++){
            answer[j] += 1;
        }
    }
    
    answer.sort( (a, b) => a - b);
    return answer;
}

// 어느 배열의 자연수인 모든 원소들을 싹다 곱셈해서 최대가 될려면 최대한 편차가 작아야 한다. 
// 따라서 average만큼 n개의 원소에 배분하고, 나머지 연산자의 잉여 값 extra만큼을 1씩 쪼개서 배열 앞에서부터 더해주면 된다. 
// 마지막에 오름차순으로 마무리.
// 변수 선언, 할당을 마치고 average가 0이 나오면 n개의 자연수로 표현이 불가하기 때문에 바로 [-1]반환.

