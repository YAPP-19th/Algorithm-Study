function solution(enter, leave) {
  let stack = [];
  const result = initialArray(enter.length);

  while (true) {
    if (leave.length === 1) {
      popleft(result);
      break;
    }

    if (stack.includes(leave[0])) {
      result[leave[0]] += stack.length - 1;
      stack = stack
        .filter((s) => s !== leave[0]) // 스택에서 leave 하는 유저를 지워줌
        .map((x) => {
          result[x]++;
          return x;
        });
      popleft(leave);
    } else {
      stack.push(enter[0]);
      popleft(enter);
    }
  }

  return result;

  function popleft(arr) {
    return arr.shift();
  }

  function initialArray(len) {
    const arr = [];
    for (let i = 0; i <= len; i++) {
      arr.push(0);
    }
    return arr;
  }
}

// result  [0,0,0,0] 으로 셋팅 해준 뒤
// leave 할 때 stack에 있는 유저들의 result값을 1씩 올려주고, 자신도 스택에남아있는 유저만큼 result를 올려주고
// leave한 유저를 스택에서 제거
// leave가 1명남았을때 종료
