function solution(priorities, location) {
  let order = 1;
  const documents = [];

  for (let i = 0; i < priorities.length; i++) {
    documents.push([i, priorities[i]]);
  }

  while (true) {
    if (priorities[0] === Math.max(...priorities)) {
      if (location == documents[0][0]) {
        return order;
      }
      order++;
      priorities.shift();
      documents.shift();
    } else {
      priorities.push(priorities.shift());
      documents.push(documents.shift());
    }
  }
  return order;
}

// console.log(solution([2, 1, 3, 2], 2));
// console.log(solution([1, 1, 9, 1, 1, 1], 0));
