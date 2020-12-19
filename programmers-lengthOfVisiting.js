function solution(dirs) {
    let answer = new Set();
    let i = 0;
    let current = [0, 0];
    dirs = dirs.split('');
    // dirs = [...dirs];
    
    while(i < dirs.length){
        const previous = [...current];
        const next = current;
        
        if(dirs[i] === 'L'){
            current[0] === -5 ? next[0] : next[0] -= 1;
        }else if(dirs[i] === 'R'){
            current[0] === 5 ? next[0] : next[0] += 1;
        }else if(dirs[i] === 'U'){
            current[1] === 5 ? next[1] : next[1] += 1;
        }else{
            current[1] === -5 ? next[1] : next[1] -= 1;
        }
        
        const path = [`${previous[0]}${previous[1]}`,`${next[0]}${next[1]}`].sort();
        answer.add(path.join('->'));
        i++;
    }
    
    return [...answer].map( v => v.split('->')).filter( value => value[0] !== value[1] ).length;
}


// +) dirs = [...dirs]처럼 전개연산자로 문자열을 바로 배열처럼 쓸 수 있다. 평소 쓰던 dirs = dirs.split('')와 같다.

// +) set 자료형에서 배열값이 [1, 2]가 두 개 들어가면 중복이 아닌 걸로 인식해서 모두 포함된다. 따라서 숫자형이나 문자형으로 변환해서 set에 넣어야 한다.
