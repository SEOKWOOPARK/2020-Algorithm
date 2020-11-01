function solution(num) {
    let count = 1;
    if(num === 1) return 0;
    
    while(count){
    
        if( num % 2 === 0){
            num = num / 2;
        }else{
            num = (num * 3) + 1;
        }
        
        if( num === 1){
            break;
        }
        
        count++;
    }
    return count <= 500 ? count: -1;
}

// 1) 시키는대로 짝/홀 일 때 각각 처리한다.
// 2) 연산을 마쳤는데 num = 1이면 break / 아니면 count 늘리기

