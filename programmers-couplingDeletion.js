function solution(s){
    let i = 0;
    let stack = [];
    let string = s.split('');
    
    while(i < string.length){
        if( stack.length === 0){
            stack.push(string[i]);
        }else{
            stack[stack.length - 1] === string[i] ? stack.pop() : stack.push(string[i]);
        }
        i++;
    }

    return stack.length ? 0 : 1;
    
// 전에 풀어봤던 스택 유형의 괄호검사와 매우 유사해서 수월한 편이었다. 이번 문제는 삼항연산자를 사용하여 그 때보다 조금 더 축약된 코드로 작성했다.

