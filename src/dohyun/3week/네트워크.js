function solution(n, computers) {
  let answer = 0;
  const queue = [];
  const visited = new Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      queue.push(i);
      visited[i] = true;
      while (queue.length > 0) {
        const current = queue.shift();
        for (let j = 0; j < n; j++) {
          if (computers[current][j] === 1 && !visited[j]) {
            queue.push(j);
            visited[j] = true;
          }
        }
      }
      answer++;
    }
  }
  return answer;
}
