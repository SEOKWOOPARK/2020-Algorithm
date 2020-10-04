function solution(number, k) {
    let StNum = String(number);
    let num_length = StNum.length;
    let stack = [];
    let count = 0;
    
    for(let i = 0; i < num_length; i++){
       let element = number[i];
        if(stack.length === 0){
           stack.push(element);
           continue;
        }
        
        while(stack[stack.length-1] < element){
            stack.pop();
            count++;
            
            if(count === k) {
                return stack.join("") + number.substring(i, num_length);
            }
            
            if(stack.length === 0 ){
                break;
            }
            
        }
        
        stack.push(element);
        
    }
    
    return stack.join("").substring(0, num_length-k);
}

// 큰 수 만들기 of 탐욕법
// number는 "1924"처럼 문자열 안에 숫자가 붙어 있는 상황이다.
// 하나의 간편한 팁을 알게 되었다.
// String(숫자를 감싼 따옴표 문자열) => typeof는 문자열로 유지되면서
// 마치 배열 [1, 9, 2, 4]처럼 인덱스를 이용해서 편하게 연산할 수 있다.
// 이 문제의 경우 let StNum = String(number)처럼 쓸 수 있다.
