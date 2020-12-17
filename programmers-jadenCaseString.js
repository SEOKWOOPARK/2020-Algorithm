function solution(s){
    let str = s.split('');
    let answer;
    
    function firstSpace(arr){
        for( let i = 0; i < arr.length; i++){
            if(arr[i] === ' '){
                return i;
            }
        }
    }
    
    if(str[0] === str[0].toLowerCase()){
        str[0] = str[0].toUpperCase();
    }
        
    let space = firstSpace(str);
    let i = space;
    let j = 1;
    
    while(j < i){
        if( str [j - 1] !== ' ' && str[j] === str[j].toUpperCase()){
            str[j] = str[j].toLowerCase();
        }
        j++;
    }
    
    while(i + 1 < str.length){
        if(str[i] === ' '){
            str[i + 1] = str[i + 1].toUpperCase();
        }
        
        if(str[i - 1] !== ' ' && str[i] === str[i].toUpperCase() ){
            str[i] = str[i].toLowerCase();
        }
        i++;
    }
    answer = str.join('');
    
    return answer;
}

// 정확성 부족

function solution(s) { 
    s = s.toLowerCase(); 
    let answer = s.split(" ").map(s => { 
        let arr = s.split("");
        if(arr[0] != null) {
          arr[0] = arr[0].toUpperCase(); 
        }
        return arr.join(''); 
    }).join(' '); 
  
    return answer; 
}


// 우선 모든 문자열 소문자 변환 ->
// split(' ')을 통해 공백을 기준으로 문자열 분리해서 배열에 넣기->
// 분리된 문자열을 spilt('')을 통해 문자 단위로 또 쪼갬 -> 
// 문자 단위로 만든 배열의 첫 번째 원소(arr[0])을 대문자로 변환 ->
// split의 역프로세스로 join을 이용해 처음 문자열 형태로 회귀

// 가끔은 조금 단순히 생각해도 될 것.
