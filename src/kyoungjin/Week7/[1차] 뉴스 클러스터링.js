function solution(str1, str2) {
  let answer = 0;
  const parsedStr1 = str1.toLowerCase();
  const parsedStr2 = str2.toLowerCase();

  const getSet = (string) => {
    const arr = [];

    for (let i = 0; i < string.length - 1; i++) {
      const word = string.substr(i, 2);

      if (word.match(/[a-z]{2}/g)) {
        arr.push(word);
      }
    }

    return arr;
  };

  const arr1 = getSet(parsedStr1);
  const arr2 = getSet(parsedStr2);

  // 교집합
  const intersection = [];
  arr1.forEach((num, index) => {
    const targetNum = arr2.indexOf(num);
    if (targetNum !== -1) {
      intersection.push(num);

      arr2.splice(targetNum, 1);
    }
  });

  // 합집합
  const union = arr1.length + arr2.length;

  answer = !union ? 65536 : Math.floor((intersection.length / union) * 65536);

  return answer;
}
