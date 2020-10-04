function solution(n, lost, reserve){
    let answer = 0;
    let student = [];
    let reserveTmp = [];

    for( let i = 0; i < n ; i++) student.push(true);

    lost.forEach(lostIndex => { student[lostIndex - 1] = false});
    
    reserve.forEach(reserveIndex => {
      if( student[reserveIndex - 1] === false){
        student[reserveIndex - 1] = true;  // 내가 생각하지 못했던 부분 => 여벌이 있다가 잃어버린 케이스
      }else{
        reserveTmp.push(reserveIndex);
      }
    })
   
    reserveTmp.forEach(reserveIndex => {
      if(reserveIndex - 2 >= 0 && student[reserveIndex - 2] === false){ // 앞 사람이 잃어버렸을 떄, student 배열에서 최소 인덱스는 1이어야 한다.(학생번호 reserveIndex로는 2번부터)
        student[reserveIndex - 2] = true;
      }else if(student[reserveIndex] === false){ // 뒷 사람이 잃어버렸을 때
        student[reserveIndex] = true;
      }
    })

    answer = student.reduce( (acc, cur) => { return acc + cur}, 0);

    return answer;
}


// 탐욕법 문제
// (1) 잃어버린 사람, 여벌이 있는사람을 forEach를 통해 student 배열의 해당 인덱스에 true, false를 맵핑
// (2) 여벌이 있다가 잃어버린 사람(false)의 해당 student 배열 값을 true로 고친다. 만약 false가 아니었다면 reserveTmp로 푸쉬
// (3) 마지막으로 앞 뒤 학생이 체육복이 있는지 확인해서 빌려줄수 있으면 false인 학생을 true로 바꾼다. 단 앞사람이 잃어버린 경우 그 사람의 인덱스는 0이상.
