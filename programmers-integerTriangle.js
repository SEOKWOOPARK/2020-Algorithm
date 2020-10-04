function solution(triangle){
  for( let i = triangle.length - 2 ; 0 <= i ; i--){
    for( let j = 0; j< triangle[i].length ;j++){
      triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1]);
    }
  }
  return triangle[0][0];
}

// 정수삼각형 of 동적계획법
// 역방향으로 가장 밑층부터 대소를 비교해서 누적 시켜주면 생각보다 쉽게 해결이 됨을 알 수 있다. 순차적으로 풀려고 하다가 이 풀이를 보고 가끔은 역발상이 엄청난 효율을 가져다 줄 수 있음을 참고했다.

