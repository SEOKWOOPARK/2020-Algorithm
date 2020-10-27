function solution(s){
    let stack = [];
    let array;
    let i = 0;
    let left = '(';
    let right = ')';
    
    array = s.split('');
    
    while( i < array.length){
        if( stack.length === 0 ){
            if(array[i] !== right){
                stack.push(array[i]);
            }else{
                return false;
            }
        }else{
            if(stack[stack.length - 1] === left && array[i] === right ){
                stack.pop();
            }else{
                stack.push(array[i]);
            }
        }
        i++;
    }
    
    if( stack.length === 0){
        return true;
    }else{
        return false;
    }

}

// 1) stack이 비어 있을 때 ')'가 처음으로 들어오면 무조건 false를 반환한다.

//2) stack 맨 위의 요소가 '('이고 stack에 넣으려는 요소가 ')'이면 넣지않고 stack에서 pop한다.

// 3) 그 이외엔 해당 array요소를 stack에 push

// 4) 마지막으로 stack이 비어 있으면 괄호가 정상적으로 매칭되었기 때문에 true, 남았으면 false
