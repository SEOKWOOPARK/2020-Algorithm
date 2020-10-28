function solution(board){
  let max = 0;
  let i = 1;
  const width = board[0].length;
  const height = board.length;

  if(!board) return 0;

  if( height === 1){
    return 1;
  }

  while( i < height){

    for( let j = 1; j < width ; j++){
      if( board[i][j] === 1){
        board[i][j] = Math.min( board[i][j - 1], board[i - 1][j], board[i-1][j-1]) + 1;

        if(board[i][j] >= max){
          max = board[i][j];
        }
      }
    }

    i++;
  }

  return max * max;

}

// 2차원 배열의 모든 요소를 접근하려 했는데, 확실한 방법이 떠오르지 않았고 다른 풀이를 참고했다.

// 1) input 배열의 행(height)가 0일 때 정사각형 최대넓이는 1로 반환

// 2) 정사각형의 오른쪽 하단을 기준으로 풀어갈 것이기 때문에 행(height)을 순회하는 i는 인덱스 1부터 마지막 height - 1 / 열(width)도 마찬가지로 j를 1부터 마지막인 width - 1까지 순회

// 3) 각 인덱스에 해당하는 원소가 1일 때 왼쪽, 왼쪽의 상단, 상단을 체크한다. 이유는 이 3개의 값이 1이라면 총 4개의 정사각형이 모여 2x2 사각형을 정의할 수 있고 그 이후 3x3, 4x4, 5x5∙∙∙∙으로 확장할 수 있기 때문이다. 이 주변 3개의 원소 중 최솟값을 구하고 해당 인덱스 원소와 합산한다. 이 합산 값이 기존의 max와 비교해서 크면 max를 갱신한다.
