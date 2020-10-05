function solution(w,h){
    let answer;
    let gcd = 1;         
    let min = Math.min(w,h);
    let candidate = [];
    
    for( let i = 0; i <= min ; i++){
        if( w % i === 0 && h % i === 0 ){
            candidate.push(i);
        }
    }
    
    gcd = Math.max(...candidate);
    
    answer = w*h - (w+h-gcd);
    return answer;
}


// 1) w,h가 커질수록 직접 계산하기가 곤란하므로 쪼갤 수 있는 가장 작은 단위부터 접근해야 한다. 따라서 w, h를 최대 공약수(gcd)로 나눠야 한다.

// 2) w = gcd w', h = gcd * h' 이라고 할 때, w' * h' 사각형에서 직선이 관통해서 못 쓰는 사각형의 갯수는 w'+h'-1이고 전체적으로 보면 이것이 gcd개 만큼 배치된다. 
// (w'+h'-1) x gcd = (w + h)x gcd이다. 전체 w-h에서 (w+h)xgcd만큼을 빼야 한다.
