function solution(N, road, K) {
  let answer = 0;
  const dist = new Array(N + 1).fill(Infinity);
  const adj = Array.from({ length: N + 1 }, () => []);
  const priorityQueue = [];

  // 양방향 그래프
  road.map((route) => {
    adj[route[0]].push({
      to: route[1],
      cost: route[2],
    });
    adj[route[1]].push({
      to: route[0],
      cost: route[2],
    });
  });
  dist[1] = 0; // 출발 노드 설정
  priorityQueue.push({ to: 1, cost: 0 });

  while (priorityQueue.length !== 0) {
    // 거리기준 올림차순
    priorityQueue.sort((a, b) => {
      return a.cost - b.cost;
    });
    const { to } = priorityQueue.shift();

    adj[to].forEach((nextNode) => {
      // 다음 노드까지의 저장된 거리 & 현재 노드를 거쳐서 가는 거리 비교
      if (dist[nextNode.to] > dist[to] + nextNode.cost) {
        dist[nextNode.to] = dist[to] + nextNode.cost;
        priorityQueue.push(nextNode);
      }
    });
  }

  answer = dist.filter((num) => num <= K).length;
  return answer;
}
