function solution(s) {
  let list = s.slice(2).slice(0, -2).split("},{"); // 앞뒤 "{{"  "}}" 문자 제거 후 "},{"를 기준으로 배열 생성
  list = makeList(list); // 문자열 배열로 되어있는 리스트를 2차원 배열 리스트로 만들기
  list = sortList(list); // 배열의 길이가 작은거 부터 앞에 오게 만들기
  const result = answer(list); // a1, a2, a3, a4, ... an 도출한 배열(=답)
  return result;
}

// [ '1,2,3', '2,1', '1,2,4,3', '2' ] 이렇게 생긴 arr을 받아서
// [['1','2','3'], ['2','1'], ['1','2','4','3'], ['2']] 이렇게 만드는 함수
function makeList(list) {
  let result = [];
  list.forEach((item) => {
    const itemList = item.split(",");
    result.push(itemList);
  });
  return result;
}

// [['1','2','3'], ['2','1'], ['1','2','4','3'], ['2']] 이렇게 생긴 list를 받아서
// [['2'], ['2','1'], ['1','2','3'], ['1','2','4','3']] 이렇게 만드는 함수
function sortList(list) {
  return list.sort((next, prev) => (next.length > prev.length ? 1 : -1)); // 앞에 길이가 더 길면 뒤에꺼랑 바꿔라
}

// [['2'], ['2','1'], ['1','2','3'], ['1','2','4','3']] 이렇게 생긴 list를 받아서
// [ 2, 1, 3, 4 ] 이렇게 답을 도출 하는 함수
function answer(list) {
  let result = [];
  list.forEach((item) => {
    item.forEach((i) => {
      if (!result.includes(Number(i))) {
        result.push(Number(i));
      }
    });
  });
  return result;
}

const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
console.log(solution(s));
