function solution(orders, course) {
  const di = {};
  const candi = {};
  const answer = [];

  const getCombination = (origin, str, n, r, count) => {
    if (r === 0) di.hasOwnProperty(str) ? (di[str][0] += 1) : (di[str] = [1, str.length]);
    else if (n === 0 || n < r) return;
    else {
      str = str + origin[count];
      getCombination(origin, str, n - 1, r - 1, count + 1);
      str = str.slice(0, str.length - 1);
      getCombination(origin, str, n - 1, r, count + 1);
    }
  };

  orders
    .map((o) => o.split('').sort().join(''))
    .forEach((e) => {
      for (const r of course) {
        if (r <= e.length) getCombination(e, '', e.length, r, 0);
      }
    });

  course.forEach((c) => (candi[c] = 0));

  for (const [_, value] of Object.entries(di)) {
    if (value[0] > candi[value[1]]) candi[value[1]] = value[0];
  }

  for (const [key, value] of Object.entries(di)) {
    value[0] >= 2 && candi[value[1]] === value[0] && answer.push(key);
  }

  return answer.sort();
}
