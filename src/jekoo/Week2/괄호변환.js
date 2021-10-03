const splitUV = (u, v, str) => {
  let checkFlag = 0;
  let flag = 0;
  for (let i = 0; i < str.length; i++) {
    if (flag === 0) {
      checkFlag += 1;
    }
    if (checkFlag === 2) {
      v = str.slice(u.length, str.length);
      break;
    }
    str[i] === '(' ? (flag -= 1) : (flag += 1);
    u += str[i];
  }
  return [u, v];
};

const checkCorrect = (str) => {
  const stack = [];
  for (let char of str) {
    if (stack.length === 0) {
      stack.push(char);
      continue;
    }
    if (char === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

const transform = (u) => {
  let transStr = '';
  for (let i = 1; i < u.length - 1; i++) {
    u[i] === ')' ? (transStr += '(') : (transStr += ')');
  }
  return transStr;
};

function solution(p) {
  let answer = '';
  let u = '';
  let v = '';
  const changer = (u, v, p) => {
    [u, v] = splitUV(u, v, p);
    if ((u === '') & (v === '')) return;
    if (checkCorrect(u)) {
      answer += u;
      changer('', '', v);
    } else {
      answer += '(';
      changer('', '', v);
      answer += ')';
      answer += transform(u);
    }
  };
  changer(u, v, p);
  return answer;
}
