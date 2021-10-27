function solution(s) {
  let answer = 1;
  let isAnswer = false;

  const isPal = (first, second, length) => {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[first.length - 1 - i]) return false;
    }
    return true;
  };

  for (let length = s.length; length > 0; length--) {
    let cursor = 0;

    while (cursor + length <= s.length) {
      let first;
      let second;
      let center = cursor + Math.floor(length / 2);

      if (length % 2 === 0) {
        first = s.slice(cursor, center);
        second = s.slice(center, 2 * center - cursor + 1);
      } else {
        first = s.slice(cursor, center);
        second = s.slice(center + 1, 2 * center - cursor + 1);
      }

      if (isPal(first, second, length)) {
        answer = length;
        isAnswer = true;
        break;
      }

      cursor++;
    }

    if (isAnswer) break;
  }

  return answer;
}
