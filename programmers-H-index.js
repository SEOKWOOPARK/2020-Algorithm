function solution(citations) {
    let answer = 0;
    
    const arr = citations.sort((a,b) => a - b);
    let result = [];
    for(let i = 0; i < arr.length; i++) {
       
       result.push(Math.min(arr[i] , arr.length - i ));
    }
    return Math.max(...result);
}

// h인덱스 of 정렬
// 문제 이해 자체에 어려움이 있었다. h의 후보가 주어진 citations 배열 안의 원소들이라고 오해한 듯하다. 또한 '나머지 논문'이 h편 이하로 남았다가 아니라 'h번 이하로 인용'된 것이다.
