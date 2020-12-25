function solution(n, words) {
    let overlap = [];
    let i = 1;
    
    overlap.push(words[0]); // 처음 단어이므로 넣고 시작.
    
    while(i < words.length){ // 2번째 단어부터 반복 루프
        let last = overlap[overlap.length - 1];
        if( overlap.indexOf(words[i]) < 0 && words[i][0] === last[last.length - 1]){
            overlap.push(words[i]);
        }else{
            if( (i + 1) % n !== 0){
                return [ (i + 1) % n, Math.ceil((i + 1) / n)];
            }else{
                return [n, Math.ceil((i + 1) / n)]
            }
        }
        i++;
    }

    return [0,0];
}

// 어렵지 않게 풀었으나 마지막에 3, 4개 테스트에서 살짝 막혔는데
// 이 문제의 경우 (탐색하려는 단어가 기존에 없는 단어) + (기존에 불렸던 단어의 마지막 문자와 탐색 단어의 첫 문자가 동일)이라는 두 가지 조건 모두(and)가 만족되어야만 통과할 수 있고 
// 하나라도 만족이 안될 때 바로 return 해주는 방향으로 수정했다.
