function solution(jobs) {
    let answer;
    let sum = 0;
    let length = jobs.length;
    let start = jobs.map( value => value[0]);
    let current = Math.min(...start);
    let i = jobs.length ;
    
    jobs.sort( ( currentValue, previousValue) => {
        return currentValue[0] === previousValue[0] ?
              currentValue[1] - previousValue[1] :
              currentValue[0] - previousValue[0];
    });
    
    while( i ){
        const tasks = jobs.filter( item => item[0] <= current );
        let pop;

        if( tasks.length > 0){
            const spendTimeList = tasks.map( item => item[1]);
            const idxMin = spendTimeList.findIndex( item => item === Math.min(...spendTimeList));
            const idx = jobs.findIndex(item => item === tasks[idxMin]);
            pop = jobs.splice(idx, 1)[0];
        }else{
            pop = jobs.shift();
        }
        
        sum += pop[0] >= current ? pop[1] : pop[1] + current - pop[0];
        current = pop[0] >= current ? pop[1] + pop[0] : current + pop[1];
        i--;
    }
    
    answer = Math.floor(sum / length);
    return answer;
}

// 디스크 컨트롤러 of 힙
// 1) 시작시간 기준으로 우선 정렬해야 하는 이유는 current보다 빠른 작업이 없을 시에 먼저 요청된 작업들을 실행해야 한다는 점이다.

// 2) 각 단계마다 소요시간이 짧은 작업을 뽑아주고 current와 비교해서 뒤에 있으면 해당 소요시간에다가 갭(current - pop[0])만큼 더해준다.

// 3) 누적값이 완성되면 jobs의 길이로 나누어주고 리턴.

// +) 다른 분의 풀이를 보기 전까지는 조건 이해에 문제가 있었다는 점을 몰랐다.
긴 문제 일수록 디테일한 부분을 더 잘 잡아야 한다. 이 문제는 특히 처음 언급한 정렬의 기준과 제한사항의 마지막 조건 '하드디스크가 작업을 수행하고 있지 않을 때에는 먼저 요청이 들어온 작업부터 처리합니다'를 주의 깊게 보지 못했다.
