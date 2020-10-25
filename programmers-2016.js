function solution(a, b) {
    let answer = '';
    let days = [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let monthFirstDay = ["FRI", "MON", "TUE", "FRI", "SUN", "WED", "FRI", "MON", "THU", "SAT", "TUE", "THU" ];
    let index;
    
    index = days.indexOf(monthFirstDay[a - 1]) + (b - 1) % 7; 
    return days[index % 7];
    
}

