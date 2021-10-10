function solution(n, times) {
  let answer = 0;
  let count;
  let left = 1;
  let right = n * Math.max(...times); // 최대 시간

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // count : mid시간 동안 심사위원이 심사를 할수있는 인원 수
    count = 0;
    for (const time of times) {
      count += Math.floor(mid / time);
      if (count >= n) break;
    }

    // 만약에 심사할 수 있는 인원 수가 n명 이상이면
    // answer = mid시간
    // 이분 탐색
    if (count >= n) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

function solution(n, times) {
  class test {
    constructor() {
      this.answer = 0;
      this.count = 0;
      this.left = 1;
      this.right = n * Math.max(...times);
    }
    middle() {
      return Math.floor((this.left + this.right) / 2);
    }
    loop() {
      while (this.left <= this.right) {
        const mid = this.middle();
        // count : mid시간 동안 심사위원이 심사를 할수있는 인원 수
        this.count = 0;
        for (const time of times) {
          this.count += Math.floor(mid / time);
          if (this.count >= n) break;
        }

        // 만약에 심사할 수 있는 인원 수가 n명 이상이면
        // answer = mid시간
        // 이분 탐색
        if (this.count >= n) {
          this.answer = mid;
          this.right = mid - 1;
        } else {
          this.left = mid + 1;
        }
      }

      return this;
    }
  }
  const temp = new test();
  return temp.loop().answer;
}
