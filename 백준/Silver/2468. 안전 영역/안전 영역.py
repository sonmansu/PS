import sys
sys.setrecursionlimit(10 ** 6)

input = sys.stdin.readline
n = int(input())
area = [list(map(int, input().split())) for _ in range(n)]
max_height = max(map(max, area))
max_cnt = 0
dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]

def is_valid_coord(y, x):
    return 0 <= y < n and 0 <= x < n

def dfs(y, x):
    chk[y][x] = 1
    for i in range(4):
        ny = y + dy[i]
        nx = x + dx[i]
        if (is_valid_coord(ny, nx) and not chk[ny][nx] and area[ny][nx] >= height):
            dfs(ny, nx)

for height in range(0, 100): 
    cnt = 0
    chk = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            if area[i][j] >= height and not chk[i][j]:
                cnt += 1
                dfs(i, j)

    if cnt > max_cnt: max_cnt = cnt

print(max_cnt)