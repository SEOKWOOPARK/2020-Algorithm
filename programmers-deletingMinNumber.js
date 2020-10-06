function solution(arr) {
    let answer = [];
    
    let min = Math.min(...arr);
    arr.splice( arr.indexOf(min), 1);
    
    if(arr.length !== 0 ){
        return answer = arr; 
    }
    
    return [-1];
    
}
