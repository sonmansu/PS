function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, curr) => {
        return count + ((budget -= curr) >= 0)
    }, 0)
}