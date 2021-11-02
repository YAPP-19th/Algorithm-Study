const findAnswer = (str) => {
  const stack = [];
  let cnt = 0;

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    if (stack.slice(stack.length - 3).join('') === '110') {
      cnt++;
      stack.pop();
      stack.pop();
      stack.pop();
    }
  }

  if (cnt === 0) {
    return str;
  } else {
    const temp = [];

    while (stack.length) {
      const word = stack.pop();
      if (word === '0') {
        stack.push(word);
        break;
      }
      temp.push(word);
    }
    while (cnt) {
      stack.push('110');
      cnt--;
    }
    return stack.join('') + temp.reverse().join('');
  }
};

const solution = (s) => s.map(findAnswer);

// console.log(solution(['1110', '100111100', '0111111010']));
