function solution(n, computers) {
    let answer = 0;
    
    let check = Array(computers.length).fill(0);
        
    for(let  i = 0;  i < computers.length; i++ ){
        if(!check[i]){
            DFS(i);
            answer+=1;
        }
    }
    
    function DFS(index){
        check[index] = 1;
        
        for(let i = 0; i< computers.length; i++ ){
            if(computers[index][i] === 1 && !check[i]){
                DFS(i);
            }
        }
    }
        
    return answer;
}


// 각 노드에 대한 방문여부를 check 배열을 사용해 점검한다.
방문되지 않은 상태를 0, 방문한 상태를 1로 가정. 따라서 초기 값은 0으로 설정.

// 첫 번째 노드부터 출발
check[0] = 0이기 때문에 if문 안의 DFS가 실행되고 check = 1로 할당

// DFS가 호출 되고 computers[index][i] === 1 && !check[i]를 비교하게 되는데 두 노드 사이가 연결되어 있고 방문하려는 노드가 비어 있을 때 DFS함수를 다시 순환호출 한다.

// DFS 안에서 answer를 증가시키지 않고 자기 자신을 순환 호출하는 이유는 서로 연결되어 있는 같은 네트워크이기 때문이다. answer는 네트워크의 수를 카운트하는 기능의 변수.

