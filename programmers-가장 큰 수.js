function solution(numbers){
    let answer = [];
    
    function alignment(a,b){
        return (b+a) - (a+b);
    }
    
    for( let i = 0 ; i < numbers.length ; i++){
        answer.push( numbers[i] + '' );
    }
    
    answer.sort( alignment);
    
    if( answer[0] !== '0'){
        return answer = answer.reduce( (sum, current) => sum + current);
        // return answer.join('');
    }
    else{
        return '0';
    }
    
}


// numbers의 원소들을 문자열로 바꿔서 answer에 넣는다.
// alignment라는 함수를 이용해서 sort()를 정의할 수 있다.
// 이 부분이 문제 해결의 절반 이상. 3과 30의 케이스를 보면 330과 303의 대소를 비교하기 위해서 (b+a) - (a+b)로 반환값을 얻는다.
// 이렇게 정렬한 answer 배열의 0번째 원소가 '0'이 되면 나머지도 '0'이 되고 리턴값도 '0'으로 한다. '0'이 아닐 때는 배열을 reduce함수로 싹 합쳐서 반환.
