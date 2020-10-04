function solution(N, number) {
    const cache = new Array(9).fill(0).map(el => new Set());
    
    for(let i = 1; i < 9; i++){
        cache[i].add('1'.repeat(i) * N);  ••••••  (1)
        
        for (let j = 1; j < i; j++) {
            for(const arg1 of cache[j]){
                for(const arg2 of cache[i - j]){
                    cache[i].add(arg1 + arg2);
                    cache[i].add(arg1 - arg2);
                    cache[i].add(arg1 * arg2);
                    cache[i].add(arg1 / arg2>>0);
                }    •••••• (2)
            }
        }
        if(cache[i].has(number)) return i; •••••• (3)
    }
    return -1;
}	


//  n으로 표현 of dynamic programming 
// (1) 주어진 N이 NN 형태로 붙어 있게 반복한다. 또한 i = 1부터 시작한 이유는 최솟값을 찾기 위해 오름차순으로 인덱스를 방문해야 하고 i = 0이면 1로 표현해야 하는데 이는 고려할 대상이 아니다.
// (2) 모든 경우의 수를 뽑아내는 완전탐색을 위한 반복문. 이 답안에서 왜 set으로 유닛을 만들고 add함수를 썼는지 고민했는데, 직접 몇 가지 케이스를 계산해본 결과 
// 중복된 값이 유닛에 들어가면 복잡해질 수 있어서 set을 쓴 것 같다. j가 i보다 하나 작아야 하는 이유는 그 전 결과를 활용해야 하는 동적계획법의 개념을 포함하고 있다. 
// 이 문제의 경우에 답이 되는 경우는 i = 4일 때, j = 1,2,3 i - j = 3,2,1의 범위 안에 있다. j = 3, cache[j] = 55 + 5 그리고 i - j = 1 , cache[i-j] =5 를 가지고
// cache[j] / cache[i-j]일 때 주어진 number = i = 4 가 반환된다.

// (3) 오름차순으로 계속 계산하다가 number를 만족하는 가장 작은 인덱스를 만나면 반환

// set 개념이 익숙하지 않아서 풀이를 봐도 이해하는데 상당한 시간 소요.
// set + 완전탐색 + 동적계획법을 한꺼번에 사용해야 하는 문제.
