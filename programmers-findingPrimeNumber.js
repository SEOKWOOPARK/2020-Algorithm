function solution(numbers) {
    let answer = 0;
    let primeNumbers = [];

    const numbersArr = numbers.split("");
    
    const determinePrime = (num) => {
        let count = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                count++;
            }
            if (count >= 3) {
                break;
            }
        }
        if (count === 2 && !primeNumbers.includes(num)) {
            primeNumbers.push(num);
        }
    };

    const mergeNumbers = (arr, str) => {
        if (arr.length > 0) {
            for (let i = 0; i < arr.length; i++) {
                const temp = [...arr];
                temp.splice(i, 1);
                mergeNumbers(temp, str + arr[i]);
            }
            
        }

        if (str.length > 0) {
            determinePrime(+str);
        }
    };

    mergeNumbers(numbersArr, "");
    
    answer = primeNumbers.length;
    return answer;
}

// 소수찾기 of 완전탐색

// 1) 주어진 숫자들의 조합을 모두 찾아야 한다. 재귀함수를 사용한다.

// 2) 개별 조합의 경우가 나올 때마다 소수인지 판별.

