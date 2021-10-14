function solution(n, computers) {
  let answer = 0;
  const visited = new Array(n).fill(false);
  const queue = [];

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // BFS
      visited[i] = true;
      answer += 1;
      queue.push(i);

      while (queue.length !== 0) {
        const currentNode = queue.shift();
        computers[currentNode].forEach((element, node) => {
          if (element === 1 && !visited[node]) {
            visited[node] = true;
            queue.push(node);
          }
        });
      }
    }
  }

  return answer;
}
