function solution(n, results) {
    let idx = 0;
    let boxers = new Array(n).fill(0);
    boxers = boxers.map(a => [[],[]]);

    for(var i=0;i<results.length;i++){
        let result = results[i];
        boxers[result[0]-1][1].push(result[1]);
        boxers[result[1]-1][0].push(result[0]);    
    }
    
    
    while(idx < n){
        for(let i=0; i < results.length; i++){
            let result = results[i];
            let r1 = result[0];
            let r2 = result[1];
            
            for(let j=0; j<boxers.length; j++){
                let boxer = boxers[j];
                let b1 = boxer[0];
                let b2 = boxer[1];
                if(b1.length + b2.length == n-1) continue
                if(b1.includes(r2)){
                    if(!b1.includes(r1)) b1.push(r1)
                }
                if(b2.includes(r1)){
                    if(!b2.includes(r2)) b2.push(r2)
                }
            }
        }
        
        idx++;
    }
    
    return boxers.filter(a => {return a[0].length + a[1].length == n-1 ? true : false}).length;
}

// 순위 of 그래프
// 1) 주어진 경기 결과를 1차적으로 정리해주는 boxers 배열을 선언.

// 2) 통해서 선수의 총 인원만큼 [ [ ], [ ] ] 형태로 자신을 상대로 진 선수의 번호와 이긴 선수의 번호를 차례로 넣어준다.

// 3) 경기 결과 데이터를 하나하나 반복문으로 확인한다. 첫 번째 결과인 [4,3] 이라면 r1 = 4, r2 =3 로 놓고 경기 결과가 망라된 boxers의 값들과 비교해서 if문으로 확실하게 승리, 패배를 가늠할 수 있는 데이터면 b1, b2에 넣어준다.

// 4) 나머지 4명과의 승리, 패배를 확실하게 추론할 수 있는 boxers의 요소들을 뽑고 그것의 길이를 return하면 된다.
