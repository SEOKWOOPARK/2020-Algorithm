function solution (A,B){
    let answer = 0;
    let i = 0;
    
    if( A.length == 1){
        return A[0] * B[0];
    }

    A.sort( (a, b) => a - b);
    B.sort( (a, b) => b - a);
    
    while( i < A.length ){
        answer += A[i] * B[i];
        i++;
    }
    return answer;
}

// 최솟값 만들기
// 다른 솔루션을 참고한 결과, 흐름은 비슷하지만 내 풀이에선 좀 더 단순화해서 녹여내지 못했다. max, min으로 A와 B의 최대 최소를 비교할 것 없이
// 하나는 내림차순 다른 하나는 오름차순으로 정렬해서 해당 인덱스끼리 곱하고 누적하면 된다. 덜 복잡하게 생각해도 괜찮은 경우가 있고 이 문제가 그런 경우.
