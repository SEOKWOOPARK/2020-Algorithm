function solution(n) {
    let count = 1;
    let i = 1;
    
    for( let i = 1 ; i <= Math.floor(n / 2); i++ ){
        let sum = i;
        for( let j = i + 1 ; j <= n ; j++){
            sum += j;
            if( sum === n){
                count++;
                
            }else if( sum > n){
                break;
            }
        }  
    }
    
    return count;
}


// 숫자의 표현

// 1) 반복문 2번을 다 돌게 되면 n이 15여도 시간초과가 발생한다. 따라서 n의 절반 범위만 적절히 잘라서 계산해야 한다.

// 2) 또한 누적값 sum이 n을 넘어설 때 break를 걸어주어야 더 이상 의미 없는 계산을 멈춰서 메모리 시간을 줄일 수 있다. 이 부분에서 약간의 실수가 있었다.
// sum = n인 경우에 break를 걸었던 점이 오류였다.
