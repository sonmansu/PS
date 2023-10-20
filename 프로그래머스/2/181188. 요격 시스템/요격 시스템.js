function solution(targets) {
    var answer = 0;
    
    targets.sort((a,b) => a[1] - b[1]);
    let end = 0;
    targets.forEach(([s, e]) => {
        if (s < end) {
            return;
        }
        answer++;
        end = e;
        
    })
    return answer;
}