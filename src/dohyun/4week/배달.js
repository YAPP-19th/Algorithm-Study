function solution(N, road, K) {
  const leastWeight = Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
  leastWeight[1] = 0;

  const graph = {};
  for (const [a, b, c] of road) {
    if (a in graph) graph[a].push([b, c]);
    else graph[a] = [[b, c]];
    if (b in graph) graph[b].push([a, c]);
    else graph[b] = [[a, c]];
  }

  function dfs(node) {
    for (const [nextNode, nextWeight] of graph[node]) {
      const total = leastWeight[node] + nextWeight;
      if (total < leastWeight[nextNode]) {
        leastWeight[nextNode] = total;
        dfs(nextNode);
      }
    }
  }
  dfs(1);

  return leastWeight.filter((w) => w <= K).length;
}
