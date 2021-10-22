function solution(priorities, location) {
  let answer = 0;
  let flag = false;
  const queue = priorities.map((priority, num) => [priority, num]);

  while (queue.length) {
    const [currentPriority, num] = queue.shift();

    for (let i = 0; i < queue.length; i++) {
      const comparePriority = queue[i][0];
      if (comparePriority > currentPriority) {
        queue.push([currentPriority, num]);
        break;
      }

      // 모든 우선순위와 비교 완료
      if (i === queue.length - 1) {
        answer += 1;
        if (num === location) {
          flag = true;
          break;
        }
      }
    }

    if (flag) break;
  }

  return queue.length ? answer : (answer += 1);
}
