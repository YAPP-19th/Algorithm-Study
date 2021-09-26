function solution(places) {
  function bfs(B, startX, startY) {
    const moveX = [-1, 0, 1, 0];
    const moveY = [0, 1, 0, -1];
    const visit = Array.from(Array(5), () => Array(5).fill(false));
    visit[startX][startY] = true;
    const q = [[startX, startY, 0]];
    while (q.length !== 0) {
      const [X, Y, D] = q.shift();
      for (let i = 0; i < 4; i++) {
        const nextX = X + moveX[i];
        const nextY = Y + moveY[i];
        if (0 <= nextX && nextX < 5 && 0 <= nextY && nextY < 5) {
          if (!visit[nextX][nextY]) {
            if (B[nextX][nextY] === 'P') {
              return false;
            }
            if (B[nextX][nextY] === 'O' && D < 1) {
              q.push([nextX, nextY, D + 1]);
              visit[nextX][nextY] = true;
            }
          }
        }
      }
    }
    return true;
  }

  function check(arr) {
    const board = arr.map((line) => line.split(''));
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (board[i][j] === 'P') {
          const flag = bfs(board, i, j);
          if (!flag) return false;
        }
      }
    }
    return true;
  }
  return places.map((arr) => (check(arr) ? 1 : 0));
}
