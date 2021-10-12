function solution(n, results) {
  let result = 0;
  let { winner_graph, loser_graph } = makeGraph(results);

  for (let i = 1; i < n + 1; i++) {
    // i 한테 진 얘들은 i를 이긴 얘들한테도 진 것
    if (loser_graph[i]) {
      loser_graph = joinGraph(winner_graph, loser_graph, i);
    }
    // i 한테 이긴 얘들은 i한테 진 얘들한테도 이긴 것
    if (winner_graph[i]) {
      winner_graph = joinGraph(loser_graph, winner_graph, i);
    }
  }

  // i 한테 이기고 진 얘들 합쳐서 n-1이면 순위가 결정된 것
  for (let i = 1; i < n + 1; i++) {
    const winGraphLength = graphLength(winner_graph[i]);
    const loseGraphLength = graphLength(loser_graph[i]);
    if (winGraphLength + loseGraphLength === n - 1) {
      result++;
    }
  }

  return result;
}

// 배열을 그래프화 하기
function makeGraph(results) {
  let winner_graph = {}; // 이긴 사람 그래프 객체
  let loser_graph = {}; // 진 사람 그래프 객체

  // 이긴 사람, 진사람 그래프화
  for (const [winner, loser] of results) {
    winner_graph[loser]
      ? winner_graph[loser].unshift(winner)
      : (winner_graph[loser] = [winner]);
    loser_graph[winner]
      ? loser_graph[winner].unshift(loser)
      : (loser_graph[winner] = [loser]);
  }
  return { winner_graph, loser_graph };
}

// 그래프 더하기 (ex 1번이 2번한테 지고 2번이 3번한테 졌으면 1번은 3번한테도 진걸로 그래프에 추가 )
function joinGraph(prev, next, i) {
  for (const key in prev[i]) {
    next[prev[i][key]] = next[prev[i][key]].concat(next[i]);
    const set = new Set(next[prev[i][key]]);
    next[prev[i][key]] = [...set];
  }
  return next;
}

// 각 그래프 길이 구하기
function graphLength(graph) {
  return graph ? graph.length : 0;
}
