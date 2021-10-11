function solution(n, results) {
  let answer = 0;
  let adjMatrix = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Infinity)
  );

  results.forEach(([win, lose]) => {
    adjMatrix[win][lose] = 1; // 이김
    adjMatrix[lose][win] = -1; // 짐
  });

  // 플로이드 와샬
  // 한 다리를 걸쳐서 2개의 선수 승부 결과를 알 수 있어야 합다.
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i === j) continue;
        if (adjMatrix[i][j] === Infinity) {
          if (adjMatrix[i][k] === 1 && adjMatrix[k][j] === 1) {
            adjMatrix[i][j] = 1; // 이김
          } else if (adjMatrix[i][k] === -1 && adjMatrix[k][j] === -1) {
            adjMatrix[i][j] = -1; // 짐
          }
        }
      }
    }
  }

  adjMatrix.forEach((row) => {
    const result = row.filter((item) => {
      return item === Infinity;
    }).length;

    if (result === 2) answer++;
  });

  return answer;
}
