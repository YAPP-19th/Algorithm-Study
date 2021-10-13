function solution(word) {
  const words = ["A", "E", "I", "O", "U"];
  const dict = [];

  const getDict = (curWord, depth) => {
    if (depth === 6) return;
    dict.push(curWord);
    for (const nextWord of words) {
      getDict(curWord + nextWord, depth + 1);
    }
  };

  words.forEach((word) => {
    getDict(word, 1);
  });

  return dict.indexOf(word) + 1;
}
