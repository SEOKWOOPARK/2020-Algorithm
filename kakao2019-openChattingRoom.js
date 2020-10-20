function solution(record) {
    const userInfo = {};
    const action = [];
    const stateMapping = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }

    record.forEach((v) => {
        const [state, id, nick] = v.split(' ');

        if(state !== "Change") {
            action.push([state, id]);
        }

        if(nick) {
            userInfo[id] = nick;
        }
    })

    return action.map(([state, uid]) => {
        return `${userInfo[uid]}${stateMapping[state]}`;    
    })
}


// 1) input을 각 record마다 split(" ")으로 하면 간단하게 공백 사이를 기준으로 행위, id, nickName을 구분할 수 있다.

// 2) Enter, Leave 등의 기록이 들어올 때마다 출력하므로 actionArr 배열에 객체로 저장하고 특히 Enter일 경우엔 nickNameObject[input[1]] = input[2] 처럼 닉네임과 아이디가 바뀔 경우엔 갱신해준다. Leave일 땐 그 기록만 actionArr에 남긴다.

// 3) Change일 경우엔 nickNameObject[input[1]] = input[2] 닉네임과 아이디만 갱신하면 된다.

// 주어진 인풋을 따로 배열이나 객체에 저장해서 풀어야 하는 문제는 더 많이 고민하고 코드 작성을 시작해야 한다.
