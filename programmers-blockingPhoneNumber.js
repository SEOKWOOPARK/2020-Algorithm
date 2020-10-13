function solution(phoneNumber) {
   let answer ;
   let i = phoneNumber.length;
   phoneNumber = phoneNumber.split('');
   
   while( i >= 0){
       if( i < phoneNumber.length - 4 ){
           phoneNumber[i] = '*';
       }
       i--;
   }
   
   answer = phoneNumber.join('');
   return answer;
}

