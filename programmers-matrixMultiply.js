function solution(arr1, arr2) {
    let answer = [];
    let row;
    let element;
    
    for(let i = 0; i < arr1.length; i++){
        row = [];
        for(let j = 0; j < arr2[0].length; j++){
            element = 0;
            for(let k = 0; k < arr2.length; k++){
                element += arr1[i][k] * arr2[k][j];
            }
            row.push(element);
        }
        answer.push(row);
    }
    return answer;
}
// 행렬의 곱셈
// 1) 가장 바깥 for문은 row(행)의 갯수를, 두 번째 for문은 column(열)의 갯수를 정의.

// 2) 마지막 k를 사용한 for문에서 주의할 점은 (a by b) x ( b by c)의 결과는 a by c 크기의 행렬이 되기 때문에 k가 후자 배열인 arr2.length 만큼 진행하거나 arr1[0].length(인덱스는 0이 아니고 arr1의 길이 중 임의 값이어도 가능)로 해야 한다.

// 주어진 행렬들의 사이즈가 가변적일 경우가 있어서 행렬 요소마다 계산 결과값을 한 개의 변수에 누적해야 한다는 점은 캐치했는데 그것을 3중 반복문( 행, 열, 행과 열 사이의 반복 계산)으로 풀어내지 못함.
