const isPalindrome = (start, end, dp, s) => {
  let ret = 0;
  if (start >= end) {
    return 1;
  }

  if (dp[start][end]) {
    return dp[start][end];
  }

  if (s[start] == s[end]) {
    ret = isPalindrome(start + 1, end - 1, dp, s);
  }

  dp[start][end] = ret;
  return ret;
};

function solution(s) {
  const n = s.length;
  const dp = Array.from(Array(n), () => Array(n).fill(null));
  let answer = 1;

  for (let i = 0; i < n; i++) {
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      isPalindrome(i, j, dp, s);
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (dp[i][j]) {
        answer = Math.max(answer, Math.abs(i - j) + 1);
      }
    }
  }

  return answer;
}

// console.log(solution('abcdcba'));
// console.log(solution('abacde'));
// console.log(solution('a'));
