function solution(n, s, a, b, fares) {
  const paths = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
  let total_fare = Infinity;

  for (let i = 0; i < n + 1; i++) {
    paths[i][i] = 0;
  }

  for (const fare of fares) {
    const [s, e, cost] = fare;
    paths[s][e] = cost;
    paths[e][s] = cost;
  }

  for (let j = 1; j < n + 1; j++) {
    for (let i = 1; i < n + 1; i++) {
      for (let k = i + 1; k < n + 1; k++) {
        paths[i][k] = Math.min(paths[i][k], paths[i][j] + paths[j][k]);
        paths[k][i] = paths[i][k];
      }
    }
  }

  for (let i = 1; i < n + 1; i++) {
    total_fare = Math.min(total_fare, paths[s][i] + paths[i][a] + paths[i][b]);
  }

  return total_fare;
}

// console.log(
//   solution(6, 4, 6, 2, [
//     [4, 1, 10],
//     [3, 5, 24],
//     [5, 6, 2],
//     [3, 1, 41],
//     [5, 1, 24],
//     [4, 6, 50],
//     [2, 4, 66],
//     [2, 3, 22],
//     [1, 6, 25]
//   ])
// );
