function solution(answers) {
    let group = [[1,2,3,4,5],[2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    let final = [];
    let count = Array(group.length).fill(0); 
    
        
    for(let i = 0 ; i<group.length; i++){
        for(let j = 0; j< answers.length ; j++){
            if( answers[j] === group[i][ j % group[i].length ] ){
                count[i]++;
            }
        }
    }
    
    for(let i = 0 ; i < count.length ; i++){
        if(count[i] === Math.max(...count)){
            final.push(i+1)
        }
    }
    
    return final;
}

// 모의고사 of 완전탐색
// group 배열 안에 1, 2, 3번의 찍는 최소 패턴을 저장. count 배열엔 맞은 문제의 수를 저장.

// 이중반복문으로 들어가서 각 학생의 맞은 문제수를 체크한다. 나머지 연산자 '%'는 answers가 5개 이상 주어질 때 맞은 문제를 체크하기 위한 역할을 한다. 어려운 내용은 아니었으나 이 부분에서 마무리에 조금 딜레이가 있었다.

// count의 배열 원소들과 최대값을 비교해서 일치하는 인덱스에 1을 더한다. 학생의 순서는 1번부터 시작하기 때문이다.

