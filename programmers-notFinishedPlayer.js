function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i = 0 ; i<participant.length ; i++) {
        if(participant[i] !== completion[i]) return participant[i];
    }
    
}


// 완주하지 못한 선수 of 정렬

// participant, completion 배열을 기본 정렬 후 같은 인덱스끼리 비교하고 일치하지 않는 참여자를 리턴

