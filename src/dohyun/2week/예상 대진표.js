function solution(n, a, b) {
  for (let i = 1; ; i++) {
    a = a % 2 === 0 ? a / 2 : parseInt(a / 2) + 1;
    b = b % 2 === 0 ? b / 2 : parseInt(b / 2) + 1;
    if (a === b) return i;
  }
}
