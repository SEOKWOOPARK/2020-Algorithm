function solution(n) {
    let answer = n + 1;

    while (true) {
        const binaryN = n.toString(2).split("").filter(value => value === "1").length;
        const binaryAnswer = answer.toString(2).split("").filter(value => value === "1").length;

        if (binaryN === binaryAnswer) {
            break;
        }
        answer++;
    }
    return answer;
}

// 다음 큰 수

// 1) number.toString(a)는 숫자형 데이터 number를 a(이것도 숫자형)진법으로 바꿔서 문자열 형태로 리턴한다. answer는 무조건 n보다 커야하므로 편의상 n + 1로 초기화하고 시작한다.

// 2) 인풋 n에 대해 toString을 하고 각 이진수의 자리값들을 배열에 넣는다. 그리고 1의 갯수를 뽑아낸다. answer도 마찬가지로 진행

// 3) if절을 통해 binaryN과 binaryAnswer이 같아지는 순간 while문을 끝낸다.

