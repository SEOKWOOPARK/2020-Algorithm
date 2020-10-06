function solution(skill, skill_trees) {
    let skillArray = skill.split("");
    let filteredString;
    let count = 0;
    
    for(let i = 0; i < skill_trees.length; i++){
        filteredString = skill_trees[i].split("").filter( element => skillArray.includes(element)).join("");
        
        if(filteredString === skill.substring(0, filteredString.length)){
            count++;
        }
    }
    return count; 
}

// 스킬트리 of 위상정렬

// 1) 문자열 상태로는 각 트리가 skill의 요소를 갖고 있는지 알기 어려워서 일단 배열에 담는다. 그 후에 skill안에 있는 원소 값에 해당 되는 문자만 따로 추출한다(filteredString).

// 2) 선행 순서를 지키면서 반드시 C,B,D를 모두 가지고 있지 않은 경우도 있기에 skill을 filteredString의 길이 만큼 잘라서 일치하는지 비교한다. 일치하면 카운트 하나 상승.

