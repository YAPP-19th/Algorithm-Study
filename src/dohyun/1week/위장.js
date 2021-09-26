function solution(clothes) {
  let count = {};
  let result = 1;

  clothes.forEach((clothe) => {
    !count[clothe[1]] ? (count[clothe[1]] = 2) : count[clothe[1]]++; // count객체에 최초 옷 정보를 넣을때 입지 않은 경우(+1)도 포함해서 넣음 
  });
  for (let key in count) {
    result *= count[key];
  }
  return result - 1; // 아무 옷을 입지 않은 경우 1을 뺴줌
}

const clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

console.log(solution(clothes));
