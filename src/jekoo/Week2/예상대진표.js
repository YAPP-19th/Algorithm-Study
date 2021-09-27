function solution(n, a, b) {
  let A = a;
  let B = b;
  let answer = 0;
  while (true) {
    if (A % 2 !== 0) A += 1;
    if (B % 2 !== 0) B += 1;
    if (A === B) return answer + 1;
    answer += 1;
    A = Math.floor(A / 2);
    B = Math.floor(B / 2);
  }
}
