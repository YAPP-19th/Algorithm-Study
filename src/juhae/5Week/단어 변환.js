const canConvert = (current, next) => {
  let isConverted = false;
  const len = current.length;

  for (let i = 0; i < len; i++) {
    if (current[i] !== next[i]) {
      if (isConverted) return false;
      isConverted = true;
    }
  }

  return true;
};

function solution(begin, target, words) {
  let answer = 0;
  const visited = {};
  const queue = [[begin, 0]];

  if (!words.includes(target)) return answer;

  words.forEach((word) => {
    visited[word] = Infinity;
  });

  while (queue.length) {
    const [current, cnt] = queue.shift();
    if (current === target) {
      answer = visited[current];
      break;
    }
    words.forEach((word) => {
      if (visited[word] > cnt && canConvert(current, word)) {
        visited[word] = cnt + 1;
        queue.push([word, cnt + 1]);
      }
    });
  }
  return answer;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
