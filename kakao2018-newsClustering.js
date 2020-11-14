function solution(str1, str2) {
    let answer = 0;
    let firstArr = [];
    let secondArr = [];
    let j = 0;
    let common = [];
    let sum = [];
    let similarity;
    let arr =[1,2,3,4];
    
    str1 = str1.split('').map(value => value.toUpperCase());
    str2 = str2.split('').map(value => value.toUpperCase());
    
    for( let i = 0; i < str1.length; i++){
        if(str1[i].search(/[^A-Z]/g)) str1.splice(i, 1);
    }
    for( let i = 0; i < str2.length; i++){
        if(str2[i].search(/[^A-Z]/g)) str2.splice(i, 1);
    }
    
    for( let i = 0; i < str1.length - 1; i++){
        firstArr.push(str1[i] + str1[i + 1]);
    }
    for( let i = 0; i < str2.length - 1; i++){
        secondArr.push(str2[i] + str2[i + 1]);
    }
    
    while( j <= firstArr.length - 1){
        let finding = secondArr.find(value => value === firstArr[j]);
        if(finding){
            common.push(finding);
            firstArr.splice(j, 1);
            secondArr.splice( secondArr.indexOf(finding), 1);
        }else{
            sum.push(firstArr[j]);
        }
        j++;
    }
    
    similarity = common.length / ( firstArr.length + secondArr.length + common.length);
    
    return similarity * 65536;
}




function solution(str1, str2){
  let arr1 = new Array();
  let arr2 = new Array();
  let intersection = [];
  let union = [];
    
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  for (let i = 0; i < str1.length - 1; i++) {
    const str = str1.substr(i, 2);
    if (str[0] >= "A" && str[0] <= "Z" && str[1] >= "A" && str[1] <= "Z") {
      arr1.push(str);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const str = str2.substr(i, 2);
    if (str[0] >= "A" && str[0] <= "Z" && str[1] >= "A" && str[1] <= "Z") {
      arr2.push(str);
    }
  }
    
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      intersection.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
    }
    union.push(arr2[i]);
  }

  for (let i = 0; i < arr1.length; i++) {
    union.push(arr1[i]);
  }
    
  if (intersection.length === 0 && union.length === 0) {
    return 65536;
  }

  return Math.floor(65536 * (intersection.length / union.length));
    
};

// 문자열 비교에 대한 취약점을 알 수 있었던 문제.
