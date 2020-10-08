function solution(n) { 
    let answer = '';
    let down = n;
 
   while(down > 0) {
      if (down % 3 === 0){
        answer =  '4' + answer;  
        down = (down / 3) -1;
      }else if(down % 3 === 1){
        answer = '1' + answer;
        down = Math.floor(down / 3);

      }else{
        answer = '2' + answer;
        down = Math.floor(down / 3);
      } 
    }
    return answer;
}

// 찾아낸 규칙성을 % 연산자로 풀어가는 문제.
