// 효율성 실패
/* function solution(n, k, cmd) {
  let answer = Array(n).fill("O");
  const chart = Array(n)
    .fill(0)
    .map((num, index) => index);
  const trash = [];

  let cursor = parseInt(k);

  cmd.forEach((temp) => {
    const command = temp.split(" ");

    if (command[0] === "U") {
      // 위
      cursor = cursor - parseInt(command[1]);
    } else if (command[0] === "D") {
      // 아래
      cursor = cursor + parseInt(command[1]);
    } else if (command[0] === "C") {
      // 삭제
      trash.push([cursor, chart[cursor]]);
      chart.splice(cursor, 1);

      if (chart.length === cursor) cursor -= 1; // 표의 마지막 행일 때
    } else if (command[0] === "Z") {
      // 되돌리기
      const [row, value] = trash.pop();
      chart.splice(row, 0, value);

      if (row <= cursor) cursor += 1;
    }
  });

  trash.map((item) => {
    answer[item[1]] = "X";
  });
  return answer.join("");
} */

function solution(n, k, cmd) {
  let answer = Array(n).fill("O");
  const nodes = { 0: [n - 1, 1] }; // key: 행 번호, value: [prev, next]
  const trash = [];

  let cursor = parseInt(k);

  // 연결리스트 생성
  for (let i = 1; i < n; i++) {
    nodes[i] = i !== n - 1 ? [i - 1, i + 1] : [i - 1, 0];
  }

  cmd.forEach((temp) => {
    const command = temp.split(" ");

    let count = 0;
    if (command[0] === "U") {
      // 위
      while (count < parseInt(command[1])) {
        cursor = nodes[cursor][0];
        count += 1;
      }
    } else if (command[0] === "D") {
      // 아래
      while (count < parseInt(command[1])) {
        cursor = nodes[cursor][1];
        count += 1;
      }
    } else if (command[0] === "C") {
      // 삭제
      nodes[nodes[cursor][0]][1] = nodes[cursor][1];
      nodes[nodes[cursor][1]][0] = nodes[cursor][0];

      trash.push([cursor, nodes[cursor]]);
      const temp = nodes[cursor];
      delete nodes[cursor];

      // 마지막 행인지 판단
      cursor = temp[1] === 0 ? temp[0] : temp[1];
    } else if (command[0] === "Z") {
      // 되돌리기
      const [row, [prev, next]] = trash.pop();

      nodes[row] = [prev, next];
      nodes[prev][1] = row;
      nodes[next][0] = row;
    }
  });

  trash.map((item) => {
    answer[item[0]] = "X";
  });
  return answer.join("");
}
