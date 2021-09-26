function solution(info, query) {
  const answer = [];
  const userInfoDic = {};

  const combination = (arr, selectNum) => {
    const result = [];
    if (selectNum === 0) return [""];
    else if (selectNum === 1) return arr.map((item) => [item]);

    arr.forEach((item, index, array) => {
      const fixed = item;
      const restArr = array.slice(index + 1);
      const restCombination = combination(restArr, selectNum - 1);
      const fixedCombination = restCombination.map((item) => [fixed, ...item]);
      result.push(...fixedCombination);
    });

    return result.map((temp) => {
      return temp.join("");
    });
  };

  info.forEach((userInfo) => {
    const splited = userInfo.split(" ");
    const score = parseInt(splited.pop());

    for (let i = 0; i <= 5; i++) {
      combination(splited, i).forEach((value) => {
        userInfoDic[value]
          ? userInfoDic[value].push(score)
          : (userInfoDic[value] = [score]);
      });
    }
  });

  for (const key in userInfoDic) {
    userInfoDic[key] = userInfoDic[key].sort((a, b) => {
      return a - b;
    });
  }

  const binarySearch = (scoreList, score) => {
    if (scoreList) {
      let left = 0;
      let right = scoreList.length - 1;

      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (scoreList[mid] < score) left = mid + 1;
        else right = mid - 1;
      }

      answer.push(scoreList.length - left);
    } else answer.push(0);
  };

  query.forEach((requestInfo) => {
    const splited = requestInfo
      .replace(/ and /g, " ")
      .replace(/-/g, "")
      .split(" ");
    const score = parseInt(splited.pop());
    const key = splited.join("");
    const scoreList = userInfoDic[key];

    binarySearch(scoreList, score);
  });

  return answer;
}
