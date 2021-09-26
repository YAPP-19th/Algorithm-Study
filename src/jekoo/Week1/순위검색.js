function solution(info, query) {
  const hashArr = {};

  const makeCombination = (s) => {
    const infoArr = s.split(' ');
    const score = +infoArr.pop();
    const combinationResult = [];

    const getCombination = (tempArr, count) => {
      combinationResult.push([...tempArr].join(''));
      for (let i = count; i < 4; i++) {
        tempArr.push(infoArr[i]);
        getCombination(tempArr, i + 1);
        tempArr.pop();
      }
    };
    getCombination([], 0);

    combinationResult.forEach((com) => {
      hashArr[com] ? hashArr[com].push(score) : (hashArr[com] = [score]);
    });
  };

  info.forEach((s) => makeCombination(s));

  for (const key in hashArr) {
    hashArr[key] = hashArr[key].sort((a, b) => a - b);
  }

  const binarySearch = (checkArr, score) => {
    const totalLength = checkArr.length;
    let left = 0;
    let right = totalLength - 1;
    let mid;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (checkArr[mid] >= score) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return totalLength - left;
  };

  const getResult = (queryArr) => {
    const [language, _, group, __, career, ___, food, score] = queryArr;
    const nowQuery = (language + group + career + food).replace(/[-]+/gi, '');
    const nowScore = +score;
    if (!(nowQuery in hashArr)) return 0;
    return binarySearch(hashArr[nowQuery], nowScore);
  };

  return query.map((s) => getResult(s.split(' ')));
}
