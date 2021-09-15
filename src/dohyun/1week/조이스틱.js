function solution(name) {
  let next_index = 0;
  let min_move = name.length - 1; // 오른쪽으로 이동했을 경우 최솟값

  const list = name
    .split("")
    .map((item, index) => {
      next_index = index + 1;
      while (next_index < name.length && name[next_index] === "A") {  // 연속해서 오는 A의 수를 구함
        next_index++; // next_index = 연속된 A의 마지막 인덱스를 가리킴
      }
      min_move = Math.min(min_move, index + index + name.length - next_index); // 오른쪽으로 이동한 경우와 왼쪽으로 이동한 경우중에 최솟값
      return Math.min(item.charCodeAt(0) - 65, 91 - item.charCodeAt(0)); // 현재 문자가 A에서 위쪽으로 가까운지 아래쪽으로 가까운지 비교해서 최솟값 반환
    })
    .reduce((sum, item) => sum + item, 0);

  return list + min_move;
}

const name = "JAN";
console.log(solution(name));
