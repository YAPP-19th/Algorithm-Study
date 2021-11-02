// 다익스르타 실패
/* function solution(n, s, a, b, fares) {
  let answer = Infinity;
  const adj = Array.from({ length: n + 1 }, () => []);

  fares.forEach((route) => {
    adj[route[0]].push({
      to: route[1],
      cost: route[2],
    });
    adj[route[1]].push({
      to: route[0],
      cost: route[2],
    });
  });

  const dijkstra = (start, end) => {
    const dist = Array(n + 1).fill(Infinity); // 최단 거리 저장
    const queue = [];

    dist[start] = 0; // 출발 지점
    queue.push({ to: start, cost: 0 });

    while (queue.length) {
      const { to } = queue.shift();

      adj[to].forEach((nextNode) => {
        if (dist[nextNode.to] > dist[to] + nextNode.cost) {
          dist[nextNode.to] = dist[to] + nextNode.cost;
          queue.push(nextNode);
        }
      });
    }

    return dist[end];
  };

  for (let i = 1; i <= n; i++) {
    answer = Math.min(answer, dijkstra(s, i) + dijkstra(i, a) + dijkstra(i, b));
  }

  return answer;
}
 */

// 플로이드 와샬 성공
function solution(n, s, a, b, fares) {
  let answer = Infinity;
  const adj = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

  fares.forEach(([start, end, cost]) => {
    adj[start][end] = cost;
    adj[end][start] = cost;
  });

  for (let mid = 1; mid <= n; mid++) {
    for (let start = 1; start <= n; start++) {
      for (let end = 1; end <= n; end++) {
        if (start === end) {
          adj[start][end] = 0;
        }

        if (adj[start][end] > adj[start][mid] + adj[mid][end]) {
          adj[start][end] = adj[start][mid] + adj[mid][end];
          adj[end][start] = adj[start][mid] + adj[mid][end];
        }
      }
    }
  }

  for (let mid = 1; mid <= n; mid++) {
    answer = Math.min(answer, adj[s][mid] + adj[mid][a] + adj[mid][b]);
  }

  return answer;
}
