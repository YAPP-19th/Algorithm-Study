function solution(begin, target, words) {
  const q = [];
  let cnt = 0;

  if (words.indexOf(target) < 0) return 0;

  q.push([begin, cnt]);

  while (q.length !== 0) {
    const word = q.shift();
    cnt = word[1];

    if (word[0] === target) return word[1];

    for (const w of words) {
      let differentCount = 0;
      for (let i = 0; i < w.length; i++) {
        if (w[i] === word[0][i]) continue;
        else differentCount++;
      }
      // 서로 다른게 1개면 추가
      if (differentCount === 1) {
        q.push([w, cnt + 1]);
      }
    }
  }
}
