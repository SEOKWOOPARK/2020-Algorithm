function solution(clothes) {
  let closet = clothes.reduce((categorySum, cloth) => {
    categorySum[cloth[1]] = (categorySum[cloth[1]]) ? categorySum[cloth[1]] + 1 : 1;
    return categorySum;
    }, {});   //reduce 함수에서 {}로 풀게 되면 return값 필수

  let item = Object.values(closet);

  if (item.length === 1) {
    return item[0];
  }

  let result = 1;

  item.forEach((category) => result *= (category + 1));
  return result - 1;
}

// 위장 of 해시
// 위장할 옷 이름들의 조합으로 해결하기보다는 의상의 종류별 카운트를 저장해서 풀어가야 한다.

// closet의 변수에 종류별 누적값을 넣고 그 누적값(value)만 Object.values() 메서드를 이용해서 배열로 뽑아낸다.

// 주어진 모든 옷의 종류가 한 가지라면 item에는 딱 한 종류만 들어있기 때문에 item[0]을 바로 리턴.

// 이 부분까지는 생각을 했지만 의상 조합을 계산하는 부분에서 마무리가 되지 않았다. 만약 a, b, c, d 라는 각기 다른 종류의 의상이 있을 때,
// 모든 종류 의상을 다 입을 때는 abc*d이지만 주어진 문제의 조건은 한 개만 걸칠 수도 있어서 (a+1)(b+1)(c+1)(d+1)로 계산해야 한다. 
// 그리고 아무것도 안입고 있는 경우까지 포함이므로 마지막에 -1이 필수다. 부분이 참고 풀이 두 가지에서 얻었던 포인트.
