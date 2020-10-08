function solution(n) {
  const arr = [0, 1, 2];
  
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
  }

  return arr[n];
}


// n이 점점 커질수록 경우의 수가 기하급수적으로 늘어날 것 같아서 처음엔 브루트포스 문제인 줄 알았다. 하지만 n이 0 ~ 5까지의 범위일 때까지만 카운트하면 피보나치수열의 구조를 갖는다.
// n이 0인 경우를 빼고 n = 1일 때부터 시작했기 때문에 최종 리턴되는 fibonacci 배열값은 fibonacci[n-1].

