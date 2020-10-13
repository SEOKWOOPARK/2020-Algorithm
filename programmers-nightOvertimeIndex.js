function solution(n, works) {
    let answer = 0;
    let totalWorks = works.reduce( (sum,current) => sum + current);

    if( totalWorks > n){
        for( let i = 0; i < n ; i++){
            works[ works.indexOf( Math.max(...works))] -= 1; 
        }
        works = works.map( value => Math.pow(value, 2));
        return works.reduce( (sum, current) => sum + current);
    }
    
    return 0;
}
