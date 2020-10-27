function solution(bridge_length, weight, truck_weights) {
    let onQueue = [];
    let finishQueue = [];
    let i = 1; // 경과시간
    const len = truck_weights.length;
    
    while(i){
        
        if(onQueue.length !== 0){
            if(onQueue[0][1] + bridge_length === i){
                finishQueue.push(onQueue[0][0]);
                weight += onQueue[0][0];
            	onQueue.shift();
            }
        }   ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ 1st if문
        
        if(weight - truck_weights[0] >= 0){
            onQueue.push([truck_weights[0] , i]); //출발시간
            weight -= truck_weights[0];
            truck_weights.shift();
        }	∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ 2nd if문
        
        
        if(finishQueue.length === len){
            break;
        }
        
        i++;
    }
    
    return i;
}

// 1) 트럭 배열의 첫 번째 차량이 출발하면 현재 지나가는 트럭의 배열인 onQueue가 비어 있으므로 2nd if문부터 시작된다. 지나가는 트럭을 onQueue에 넣을 때는 출발시점 i를 꼭 같이 넣어준다.

// 2) 제한 무게 weight에서 onQueue로 push되는 트럭의 무게를 빼서 여유 무게를 설정한다. onQueue에서 트럭을 뺐기 때문에 다음 연산의 편의를 위해서 트럭 배열의 첫 번째 요소를 shift한다.

// 3) 이 문제는 전형적인 큐에 대한 상황이므로 onQueue의 길이가 0 이 아닐 때, onQueue의 첫 번째 요소의 출발시간과 bridge_length의 합이 현재의 시간 i와 같아지면 그것을 지나간 트럭 배열 finishQueue에 넣고, 그 넣은 트럭의 무게만큼 제한무게를 다시 회복한다.

// 4) 위 과정을 반복하여 finishQueue.length = 원래 트럭배열 길이가 같아지면 멈추고 i 리턴.

