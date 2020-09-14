function solution(people, limit) {
    let answer;
    let boat = [];
    people.sort((current,previous)=> current - previous);
    
    while( people.length > 0){
        
        let last = people.pop();
        
        let extraWeight = limit - last;
        
        if( people[0] <= extraWeight){
            boat.push(last + people[0]);
            people.splice( 0, 1);
        }else{
            boat.push(last)
        }
    }
    answer = boat.length;
    
    return answer;
}


// 문제에 주어진 조건에 맞게 사람들을 조합하기 위해 boat 배열을 만든다. 그리고 인풋으로 들어온 people 배열을 내림차순으로 정렬한다.
// 1명이 됐든 2명이 됐든 people 배열에 있는 인원들을 빼서 boat 배열에 넣을 것이기 때문에 while 반복문의 조건을 people.length>0로 설정해서 null이 될 때까지 루프를 돌린다.

// people 배열의 가장 뒷자리에 있고 제일 큰 수를 추출해서 last 변수로 지정. 제한무게 limit에서 last를 뺀 여분무게를 people 가장 앞쪽의 원소와 비교해서 한 명을 태울지 두 명을 태울지 결정

// boat에 문제의 조건에 맞춰서 사람을 조합해서 push하고 배열의 길이를 반환값인 answer에 할당

// ++) if문에서 people.slice(people[0], 1)를 먼저 해주면 boat.push()에선 실제로 last + people[0]이 아닌 last + people[1]를 해주는 결과와 같다. 따라서 splice보다 push를 먼저 해야되는 점에 주의한다.
