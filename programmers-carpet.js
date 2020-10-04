function solution(brown, yellow) {
    let final = [];
    let overLap;
    
    if(yellow > 2){
        for( let i = 2 ; i < yellow ; i++){
            if( yellow % i === 0){
                answer.push([ i, yellow / i] );
            }
        }
    }else if(yellow === 2){
        return [4,3];
    }else{
        return [3,3];
    }
    
    for( let j= 0; j < answer.length ; j++){
        answer[j][0] = Math.max(answer[j][0] + 2, answer[j][1] + 2);
        answer[j][1] = Math.min(answer[j][0] + 2, answer[j][1] + 2);
        if( ( answer[j][0] + answer[j][1] - 2) === (brown / 2) ){
            final.push( [answer[j][0], answer[j][1] ])
        }
    }
    
    overLap = final.find( value => value === value);
    
    return overLap;
    
// 카펫 of 완전탐색
// 1) 주어진 yellow 타일이 배치될 수 있는 경우를 모두 찾기 위해 if문으로 들어간 후, 가능한 모든 경우의 조합들을 answer 배열에 차례대로 넣는다. 중복이 발생할 수 있다.
// 2) 사실상 yellow가 1~2장일 땐 답이 정해져 있으므로 else문에 처리.
// 3) brown타일이 붙여진 최종 카펫의 가로의 길이 세로의 길이는 answer 원소들(yellow 타일들의 조합)에 2를 더 해주는 구조.
// 4) ' (가로+세로) - 2'의 값이 브라운 타일 갯수의 절반이면 최종 후보군 final배열로 넣는다.
// 5) 중복된 경우는 있지만 하나만 출력해주기 위해 overLap에 할당해서 마지막 리턴.
