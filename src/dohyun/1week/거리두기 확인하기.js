function solution(places) {
  let answer = [];
  for (let room of places) {
    const 거리두기 = 거리두기했는지체크(room);
    거리두기 === true ? answer.push(1) : answer.push(0);
  }
  return answer;
}

function 거리두기했는지체크(room) {
  let 거리두기 = true; // 1이 거리두기 잘 하는거, 0이 거리두기 안하는거
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (room[i][j] === "P") {
        if (checkRangeAndPerson(i + 1, j, room)) {
          거리두기 = false;
        }
        if (checkRangeAndPerson(i + 2, j, room) && room[i + 1][j] !== "X") {
          거리두기 = false;
        }
        if (checkRangeAndPerson(i, j + 1, room)) {
          거리두기 = false;
        }
        if (checkRangeAndPerson(i, j + 2, room) && room[i][j + 1] !== "X") {
          거리두기 = false;
        }
        if (
          checkRangeAndPerson(i + 1, j + 1, room) &&
          (room[i + 1][j] !== "X" || room[i][j + 1] !== "X")
        ) {
          거리두기 = false;
        }
        if (
          checkRangeAndPerson(i + 1, j - 1, room) &&
          (room[i][j - 1] !== "X" || room[i + 1][j] !== "X")
        ) {
          거리두기 = false;
        }
      }
    }
  }
  return 거리두기;
}

function checkRangeAndPerson(x, y, room) {
  if (x >= 0 && x < 5 && y >= 0 && y < 5 && room[x][y] === "P") {
    return true;
  }
  return false;
}

const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];

console.log(solution(places));
