// 정확도 실패 코드

/* function solution(n, a, b) {
  let answer = 1;

  while (Math.abs(a - b) !== 1) {
    answer++;

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }

  return answer;
} */

function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    answer++;

    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }

  return answer;
}
