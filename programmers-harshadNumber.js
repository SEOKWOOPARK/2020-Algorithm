function solution(x) {
    let i = x + '';
    let sum;
    
    i = i.split('').map(number => Number(number));
    sum = i.reduce( (previous, current) => previous + current, 0);
    
    if( x % sum === 0){
        return true;
    }
    
    return false;
}

// 1 ) 숫자로 받은 x를 문자열 -> 배열 -> 각 배열 숫자화
// 2 ) 모두 누적시켜 합치면 각 자릿수의 합이 된다
// 3 ) x가 누적값으로 나누어 떨어지는지 체크
