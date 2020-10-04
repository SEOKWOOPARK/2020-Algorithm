function solution(genres, plays){
  let answer = [];
  let genreData = genres.map( (genre, index) => {
    return {
      genre : genre,
      index : index,
      playCount : plays[index]
    }
  })
  
  let genrePlayCount = [];
    
  genreData.map( song => {
    let thisGenre = genrePlayCount.find( genrePlay => genrePlay.genre === song.genre);
    if(!thisGenre){
      genrePlayCount.push({
        genre: song.genre,
        totalPlayCount: song.playCount
      });
    }else{
      thisGenre.totalPlayCount += song.playCount;
    }

  })
    
  genrePlayCount.sort( (a,b) => b.totalPlayCount - a.totalPlayCount);

  for( let i = 0; i < genrePlayCount.length ; i++){
    let currentGenre = [];
    let thisGenre = genrePlayCount[i].genre;
      
    genreData.map( song => {
      if(song.genre === thisGenre){
        currentGenre.push(song);
      }
    });
      
    currentGenre.sort( (a,b) => b.playCount - a.playCount);
      
    answer.push( currentGenre[0].index);
    if( currentGenre.length > 1){
      answer.push(currentGenre[1].index);
    }
  }
  return answer;
}

// 베스트앨범 of 해시
// 1) 장르에 따라서 주어진 곡 데이터(여기선 5개)를 각각 {장르: x, 재생수: y, 인덱스: z }로 하나의 객체로 정리해준다. 객체이므로 순서는 없음.

// 2) 장르별 누적 재생수를 계산하기 위해 genrePlayCount라는 배열을 만들고 그 안에 각각의 누적값을 얻는다. 기존에 있던 장르엔 값만 누적하고 없던 장르는 genrePlayCount.push()를 통해 새로 추가해준다.

// 3) 어떤 장르가 가장 많이 재생되었는지 알기 위해서 genrePlayCount를 오름차순으로 정렬한다.

// 4) for반복문과 그 안의 currentGenre를 통해서 장르별로 곡을 분류

// 5) 곡 사이의 정렬은 개별 곡의 재생횟수에 따라 오름차순 정렬

// 6) 곡이 1개일 때와 그 이상일 때로 구분하고 리턴.

