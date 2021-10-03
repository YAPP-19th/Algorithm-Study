function solution(n) {
  let answer = 1; // 무조건 점프 한번은 해야함

  // n이 1이 될 때까지 반복
  while (n > 1) {
    if (n % 2) answer++; // n이 홀수이면 점프 횟수 증가
    n = Math.floor(n / 2); // 홀수일 경우 1을뺴고 2로 나눠주고 짝수일 경우 2로 나눠주면 된다. floor를 이용하여 2로나눈 뒤 내림차순
  }
  return answer;
}

// 0부터 시작해서 n으로 가려고 해서 계속 막혔었다.
// 구글의 도움으로 n부터 시작하면 된다는 힌트를 얻음.
