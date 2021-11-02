function solution(s) {
  let answer = [];

  s.forEach((word) => {
    const wordArr = word.split("");
    const stack = [];
    let count = 0;

    // 110 구하기
    for (let i = 0; i < wordArr.length; i++) {
      stack.push(wordArr[i]);

      if (stack.length >= 3) {
        const third = stack.pop();
        const second = stack.pop();
        const first = stack.pop();

        if (first === "1" && second === "1" && third === "0") {
          count += 1;
        } else {
          stack.push(first, second, third);
        }
      }
    }

    // 110 삽입 위치 확인
    if (count === 0) {
      answer.push(word);
    } else {
      const rest = [];
      while (stack.length) {
        const word = stack.pop();

        if (word === "0") {
          stack.push(word);
          break;
        }

        rest.push(word);
      }

      while (count) {
        stack.push("110");
        count -= 1;
      }

      stack.push(rest.reverse().join(""));
      answer.push(stack.join(""));
    }
  });

  return answer;
}

solution(["0111111010"]);
