/*
효율성 실패
function solution(n)
{
    const dp = new Array(n+1).fill(0); // 점프 횟수 dp
    dp[0] = 0;
    dp[1] = 1;
    
    for(let i=2; i<=n; i++){
       dp[i] = i % 2 === 0 ? Math.min(dp[i-1] + 1,dp[i/2]) : dp[i-1] + 1
    }
    
    return dp[n];
} */

function solution(n) {
  let answer = 0;
  while (n !== 0) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n -= 1;
      answer += 1;
    }
  }

  return answer;
}
