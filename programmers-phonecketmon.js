function solution(nums) {
    let i = 0;
    let possible = [];
    
    possible.push(nums[0]); // nums가 한 종류의 폰켓몬으로 통일됐을 경우를 대비 -> 무조건 possible에 처음 요소인 nums[0]를 넣는다.
    
    while(i < nums.length - 1){
        if( nums[i] !== nums[i + 1] && possible.indexOf(nums[i + 1]) < 0){
            possible.push(nums[i + 1]);
        }
        i++;
    }
    
    if(possible.length <= (nums.length / 2)){
        return possible.length;
    }else{
        return nums.length / 2;
    }
    
}


// 정렬을 사용하지 않기 위해 possible의 기존 요소들과 중복을 체크해야 하고 indexOf() 메서드를 사용했다.
