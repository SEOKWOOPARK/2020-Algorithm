function solution(operations) {
    let answer;
    let queue = [];
    let i = 0;
    
    while( i < operations.length ){
        if(operations[i][0] === 'I'){
            queue.push( Number( operations[i].slice(2) ));
        }else if( operations[i][0] === 'D'){
            if( operations[i][2] === '1' ){
                queue.splice( queue.indexOf( Math.max(...queue) ), 1);
            }else{
                queue.splice( queue.indexOf( Math.min(...queue) ), 1);
            }
        }
        if( i === operations.length - 1 && queue.length !==0 ){
            return [Math.max(...queue), Math.min(...queue)];
            break;
        }
        i++;
    }
    
    return [0, 0];
}

// 이중우선순위큐 of 힙
// 문자열, 배열, 숫자형을 변환할 때 약간 버벅였지만 전체적으로 수월하게 풀었다. 우선순위 큐의 기본을 충실히 묻는 문제.

// while문의 마지막 if절에서 queue의 길이가 0이 아닐 때로 해주어야 빈 배열일 경우 마지막 줄에 [0,0]을 반환할 수 있도록 넘어간다.

