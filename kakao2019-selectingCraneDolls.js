function solution(board, moves) {
    let basket = [];
    let relocation = Array(board.length).fill(0).map( component => []);
    let count = 0;
    let i = board.length - 1;
    
    while(i >= 0){
        for(let j = 0; j < board[i].length ; j++){
            if( board[i][j] !== 0){
                relocation[j].push(board[i][j]);
            }
        }
        i--;
    }
    
    for(let i = 0; i < moves.length; i++){
        if( relocation[moves[i] - 1].length !== 0){
            basket.push( relocation[ moves[i] - 1 ].pop() );
        }
        
        if( basket[basket.length-1] === basket[basket.length - 2]){
            basket.splice(basket.length - 2, 2);
            count += 2;
        }
    }
    
    return count;
}

// 2019 카카오 크레인 인형뽑기
// 정확성점수 차감되서 다른 풀이 참고하고 다시 시도.

function solution(board, moves) {
    let answer = 0;
    let stack = [];
    
    for(let x of moves){
        x = x-1;
        for(let i = 0; i < board.length; i++){
            if(board[i][x] !== 0){
                stack.push(board[i][x]);
                board[i][x] = 0;
                break;
            }     
        }
        
        while(stack.length > 1){
            let temp = stack.pop();
            
            if(temp === stack.slice(-1)[0]){
                stack.pop();
                answer += 2;
            } else {
                stack.push(temp);
                break;
            }
        }
        
    }
    
    return answer;
}


// 1) 배열인덱스를 찾아야 하므로 moves의 각 숫자들에서 -1된 원소들을 주어진 5x5배열을 행 기준(가로 기준)으로 탐색한다.

// 2) 0이 아닌 값이 나오면 stack으로 옮기고 그 자리를 0으로 대체한다. 그리고 break를 걸어서 for문을 멈추고 while문 안으로 진입한다.

// 3) 스택의 맨 위의 원소를 pop해서 temp에 할당하고 stack.slice(-1)[0]과 비교해서 같으면 pop을 한 번 더해서 중복된 두 개의 인형원소를 꺼내고, 다르다면 잠시 꺼냈던 temp를 다시 stack에 넣는다.
// 'stack.slice(-1)'이라고만 하면 [스택 맨 위의 원소]의 배열 형태이기 때문에 인덱스 [0]을 붙여주어야 한다.
