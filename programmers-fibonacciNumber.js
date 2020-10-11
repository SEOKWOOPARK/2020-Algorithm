function solution(n) {
    let answer = 0;
    let arr = [];
    let i = 0;
    let Fibonacci;
    
    while( i < n + 1 ){
        if( i < 2){
            arr.push(i % 1234567);
            i++;
        }else{
            Fibonacci = arr[i-2] + arr[i-1];
            arr.push( Fibonacci % 1234567 );
            i++;
        }
        
    }
    
    return arr[n];
}

// 피보나치 수
// 문제의 요지는 n번째 피보나치 수를 1234567로 나눈 나머지를 마지막에 따로 구하는 것이 아니라 각 피보나치수를 구할 때마다 이 연산을 미리 해놔야 한다는 뜻이다.
