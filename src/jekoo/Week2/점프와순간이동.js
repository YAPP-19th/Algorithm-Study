function solution(n) {
  let result = 0;
  while (n > 0) n % 2 === 0 ? (n = n / 2) : ((n -= 1), (result += 1));
  return result;
}
