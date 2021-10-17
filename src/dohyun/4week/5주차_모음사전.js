function solution(word) {
  const alpha = ["A", "E", "I", "O", "U"];
  let d = 781; // 각 알파벳 사이 거리
  let answer = 0;

  for (const i of word) {
    for (let j = 0; j < alpha.length; j++) {
      if (i === alpha[j]) {
        answer += 1 + d * j;
        break;
      }
    }

    d = parseInt((d - 1) / 5); // 각 자리수가 끝날때마다  자기 자신을 뺀 경우에서 alpha의 개수만큼 나눠줌
  }

  return answer;
}
