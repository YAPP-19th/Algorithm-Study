function solution(clothes) {
  const spy = {};
  clothes.forEach(([_, key]) => (key in spy ? (spy[key] += 1) : (spy[key] = 1)));
  return Object.values(spy).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
