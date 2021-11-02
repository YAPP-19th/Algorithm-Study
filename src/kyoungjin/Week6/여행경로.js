function solution(tickets) {
  const answer = [];

  const dfs = (start, tickets, path) => {
    const nextPath = [...path, start];

    if (tickets.length === 0) answer.push(nextPath);
    else {
      tickets.map(([from, to], index) => {
        if (start === from) {
          const temp = [...tickets];
          temp.splice(index, 1);

          dfs(to, temp, nextPath);
        }
      });
    }
  };

  dfs("ICN", tickets, []);

  return answer.sort()[0];
}
