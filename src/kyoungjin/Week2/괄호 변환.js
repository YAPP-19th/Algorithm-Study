const reverseString = (arr) => {
  let reverse = "";
  for (const char of arr) {
    if (char == "(") reverse += ")";
    else reverse += "(";
  }

  return reverse;
};

const checkCorrectString = (str) => {
  const stack = [];
  if (str[0] === ")") {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0) {
      stack.push(str[i]);
      continue;
    }

    if (stack[stack.length - 1] === "(" && str[i] === ")") {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};

function solution(p) {
  // 조건 1
  if (p === "") {
    return "";
  }

  if (checkCorrectString(p)) {
    return p;
  }

  let newStr = "";
  let u = "";
  let v = "";

  // 조건 2
  let correctCount = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      correctCount += 1;
      u += p[i];
    } else {
      correctCount -= 1;
      u += p[i];
    }

    if (correctCount === 0) {
      v += p.substring(i + 1);
      break;
    }
  }

  // 조건 3
  if (checkCorrectString(u)) {
    u += solution(v);
    return u;
  }

  // 조건 4
  newStr += "(";
  newStr += solution(v);
  newStr += ")";
  u = u.slice(1, -1);
  newStr += reverseString(u);

  return newStr;
}
