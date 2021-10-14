function solution(n, times) {
  let left = 1;
  let right = n * Math.max(...times);

  while (left < right) {
    const temp = Math.floor((left + right) / 2);

    const count = times.reduce((acc, time) => {
      return acc + Math.floor(temp / time);
    }, 0);

    if (count >= n) {
      right = temp;
    } else {
      left = temp + 1;
    }
  }

  return right;
}
