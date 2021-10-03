function solution(clothes) {
  let answer = 1;

  const table = clothes.reduce((acc, cur) => {
    acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1;
    return acc;
  }, {});

  for (let key in table) {
    answer *= table[key] + 1; // 아무 것도 안입은 경우 추가
  }

  return answer - 1; // 전부 안입은 경우는 빼기
}
