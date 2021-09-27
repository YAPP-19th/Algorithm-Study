// 동 서 남 북
const dX = [1, -1, 0, 0];
const dY = [0, 0, 1, -1];

// 좌료가 배열 내부인지 판단
const inRange = (x, y) => {
  return 0 <= x && x < 5 && 0 <= y && y < 5;
};

// 맨해튼 거리 계산
const inDistance = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2) <= 2 ? true : false;
};

const bfs = (place, visited) => {
  let queue = [];

  for (let startY = 0; startY < 5; startY++) {
    for (let startX = 0; startX < 5; startX++) {
      if (place[startY][startX] === "P") {
        queue.push([startX, startY]); // 시작 기준 x, y 저장

        while (queue.length) {
          let [x, y] = queue.shift();
          visited[y][x] = true;

          for (let i = 0; i < 4; i++) {
            const nX = x + dX[i];
            const nY = y + dY[i];

            if (
              inRange(nX, nY) &&
              inDistance(startX, startY, nX, nY) &&
              !visited[nY][nX]
            ) {
              if (place[nY][nX] === "P") {
                return 0;
              }
              if (place[nY][nX] !== "X") {
                queue.push([nX, nY]);
              }
            }
          }
        }
      }
    }
  }

  return 1;
};

function solution(places) {
  let answer = [];

  places.forEach((place) => {
    let visited = Array.from({ length: 5 }, () => Array(5).fill(false)); // 방문을 확인하기 위한 이중 배열 생성
    answer.push(bfs(place, visited));
  });

  return answer;
}
