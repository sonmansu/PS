import sys
sys.setrecursionlimit(10 ** 8)
input = sys.stdin.readline

m, n, k = map(int, input().split())
coords = [list(map(int, input().split())) for _ in range(k)]
ans = []
adj = [[1] * n for _ in range(m)]
chk = [[False] * n for _ in range(m)]
dy = [-1, 0, 1, 0]
dx = [0, 1, 0, -1]


for coord in coords:
    [x1, y1, x2, y2] = coord
    for i in range(x1, x2):
        for j in range(y1, y2):
            adj[(m-1)-j][i] = 0

def is_valid_coord(y, x):
    return 0 <= y < m and 0 <= x < n

def dfs(y, x):
    chk[y][x] = 1
    for i in range(4):
        ny = y + dy[i]
        nx = x + dx[i]
        if (is_valid_coord(ny, nx) and not chk[ny][nx] and adj[ny][nx]):
            ans[-1] += 1
            dfs(ny, nx)

for i in range(m):
    for j in range(n):
        if adj[i][j] and not chk[i][j]:
            ans.append(1)
            dfs(i, j)

ans.sort()
print(len(ans))
print(" ".join(str(x) for x in ans))