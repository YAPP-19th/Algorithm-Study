const dfs = (begin, target, words, depth, answer) => {
  if (begin === target) {
    return Math.min(depth, answer);
  }

  // 시작 단어 추출
  const nextBeginWords = [];
  words.map((word) => {
    let index = 0;
    let count = 0;
    for (char of word) {
      if (begin[index] !== char) count += 1;
      index += 1;
    }

    if (count === 1) nextBeginWords.push(word);
  });

  // 탐색 단어 추출
  const nextSearchWords = words.filter((word) => {
    return word !== begin;
  });

  // DFS
  nextBeginWords.forEach((nextBegin) => {
    answer = dfs(nextBegin, target, nextSearchWords, depth + 1, answer);
  });

  return answer;
};

function solution(begin, target, words) {
  let answer = words.length;
  if (!words.includes(target)) return 0;

  answer = dfs(begin, target, words, 0, answer);

  return answer;
}
