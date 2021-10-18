function solution(n, k, cmd) {
  let pointer = k;
  const table = makeTable(n); // 표 생성
  const deleteStack = [];

  cmd.forEach((command) => {
    switch (command[0]) {
      case "D": // D일경우 아래에 있는 행 선택
        move(command);
        break;

      case "U": // U일 경우 위에 있는 행 선택
        move(command);
        break;

      case "C": // C일 경우 현재 선택된 행 삭제
        const down = table[pointer][1];
        const up = table[pointer][0];

        table[up][1] = down;
        table[down][0] = up;

        deleteStack.push([pointer, table[pointer]]); // 삭제 된 행을 스택에 저장
        table[pointer] = null; // 행 삭제 표시
        console.log(table);
        pointer = down == 0 ? up : down;
        break;

      default:
        const [element, node] = deleteStack.pop();
        const [preNode, nextNode] = node;

        table[element] = node;
        table[preNode][1] = element;
        table[nextNode][0] = element;
        break;
    }
  });

  return answer(n, table);

  function makeTable(n) {
    const table = { 0: [n - 1, 1] };
    for (let i = 1; i < n; i++) {
      table[i] = i === n - 1 ? [i - 1, 0] : [i - 1, i + 1];
    }
    return table;
  }

  function answer(n, table) {
    let result = "";
    for (let i = 0; i < n; i++) {
      result += table[i] ? "O" : "X";
    }
    return result;
  }

  function move(command) {
    const type = command[0];
    let num = Number(command.slice(2));
    while (num > 0) {
      pointer = type === "D" ? table[pointer][1] : table[pointer][0];
      num -= 1;
    }
  }
}
