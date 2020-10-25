function solution(n) {
    let answer = [];
    
    
    function hanoiTower(n , A , B , C){
        if(n === 1){
            return answer.push([A, C]);
        }else{
            hanoiTower(n - 1, A , C , B);
            answer.push( [A, C] );
            hanoiTower(n - 1, B , A , C);
        }
    }
    hanoiTower(n , 1, 2, 3);
    return answer;
}


// n개의 원판이 1에 쌓여 있을 때, 가장 밑단에 있는 원판을 제외한 (n - 1)개의 원판을 2로 옮기고 맨 밑에 있던 원판은 3으로 옮긴다. 그리고 2에 쌓인 (n - 1)개의 원판을 어떻게 3으로 이동할지에 대해 고민한다.

// else{
// ✔︎ 1의 맽 밑의 원판을 제외하고 나머지를 2로 옮긴다.
// ✔︎ 1에 있는 원판 한 개를 3으로 옮긴다.
// ✔︎ 2의 원판을 3으로 옮긴다.
// }
