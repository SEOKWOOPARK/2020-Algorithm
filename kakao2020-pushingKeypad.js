function solution(numbers, hand) {
    let answer = [];
    let mainHand = (hand === 'right') ? 'R' : 'L';
    let leftHand = '*';
    let leftDistance;
    let rightHand = '#';
    let rightDistance;
    let columnIndex;
    let rowIndex;
    let keyPad = [ [1,2,3], [4,5,6], [7,8,9], ['*',0,'#'] ];
    let i = 0;
    
    function findIndex(input){
        if( input === 0){
            return [3,1];
        }
        for( let a = 0; a < keyPad.length; a++){
            if(keyPad[a].find( key => key === input)){
                columnIndex = a;
                rowIndex = keyPad[a].indexOf(input);
            }
        }
        return [columnIndex, rowIndex];
    }

    while( i < numbers.length){
        
        if( numbers[i] % 3 === 1){
            answer.push('L');
            leftHand = numbers[i];
        }else if( numbers[i] !== 0 && numbers[i] % 3 === 0){
            answer.push('R');
            rightHand = numbers[i];
        }else{
            leftDistance = Math.abs(findIndex(numbers[i])[0] - findIndex(leftHand)[0] ) + Math.abs(findIndex(numbers[i])[1] - findIndex(leftHand)[1] );
            rightDistance = Math.abs(findIndex(numbers[i])[0] - findIndex(rightHand)[0] ) + Math.abs(findIndex(numbers[i])[1] - findIndex(rightHand)[1] );

            if(leftDistance > rightDistance){
                answer.push('R');
                rightHand = numbers[i];
            }else if(leftDistance === rightDistance){
                answer.push(mainHand);
                mainHand === 'R' ? (rightHand = numbers[i] ) : (leftHand = numbers[i]);
            }else{
                answer.push('L');
                leftHand = numbers[i];
            }
        }
        i++;
    }
    
    answer = answer.join('');
    return answer;
}


// 1) hand로 들어온 손을 왼/오 손잡이 mainHand 결정
// 2) while문 안에서 키패드 행렬의 행만큼 루프 돌리기.
// 3) 가장 먼저 1,4,7 / 3,6,9를 각각 L,R에 할당
// 4) 2,5,8,0 일 경우 이전의 L,R에 대한 거리를 계산해서 leftDistance가 크면 R을 answer에 푸시하고 rightDistance가 크면 L을 answer에 푸시한다.
// 5) 거리가 같을 경우 처음 설정했던 mainHand를 answer에 푸시.
// 6) 각 케이스에 맞게 왼손 위치, 오른손 위치를 갱신
