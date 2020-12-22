function solution(nums) {
    let answer = [];
    let combinations = [];
    let i = 0;
    
    while( i < nums.length){
        for( let j = i + 1; j < nums.length; j++){
            for(let x = j + 1; x < nums.length; x++ ){
            	combinations.push(nums[i] + nums[j] + nums[x]);
            }
        }
        i++;
    }

    for(let x = 0; x < combinations.length; x++){
        let count = 0;
        for(let y = 1; y <= combinations[x]; y++ ){
            if( combinations[x] % y === 0){
                count++;
            }
        }

        if(count === 2){
            answer.push(combinations[x]);
        }
    }
    
    return answer.length;
}


// 반복문 3개를 돌려서 가능한 3자리수 조합을 구한다. 하지만 한 두 개의 3자리수 케이스 누락이 발생하여 정확성이 떨어진다. 
// 중복된 숫자가 없기 때문에 combinations 배열에 indexOf를 쓸 필요가 없다.

