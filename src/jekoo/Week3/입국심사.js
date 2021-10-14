function solution(n, times) {
  times.sort((a, b) => a - b);
  let right = n * times[times.length - 1];
  let left = 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    times.reduce((acc, time) => acc + Math.floor(mid / time), 0) >= n ? (right = mid - 1) : (left = mid + 1);
  }
  return left;
}
