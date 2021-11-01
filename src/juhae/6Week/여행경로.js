const dfs = (start, tickets, visited, answer) => {
  if (answer.length === tickets.length + 1) {
    return true;
  }

  for (let idx = 0; idx < tickets.length; idx++) {
    const ticket = tickets[idx];

    if (visited[idx]) continue;
    if (start === ticket[0]) {
      visited[idx] = true;
      answer.push(ticket[1]);

      if (dfs(ticket[1], tickets, visited, answer)) {
        return true;
      } else {
        answer.pop();
        visited[idx] = false;
      }
    }
  }
  return false;
};

function solution(tickets) {
  const answer = ['ICN'];
  const visited = new Array(tickets.length).fill(false);
  tickets = tickets.sort();
  console.log(tickets);
  dfs('ICN', tickets, visited, answer);
  return answer;
}

// console.log(
//   solution([
//     ['ICN', 'JFK'],
//     ['HND', 'IAD'],
//     ['JFK', 'HND']
//   ])
// );

// console.log(
//   solution([
//     ['ICN', 'SFO'],
//     ['ICN', 'ATL'],
//     ['SFO', 'ATL'],
//     ['ATL', 'ICN'],
//     ['ATL', 'SFO']
//   ])
// );

// console.log(
//   solution([
//     ['ICN', 'COO'],
//     ['ICN', 'ABC'],
//     ['COO', 'ICN']
//   ])
// );
