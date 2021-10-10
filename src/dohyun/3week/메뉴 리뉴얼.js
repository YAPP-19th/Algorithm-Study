/**
 * course의 있는 값들을 기준으로 단품메뉴 조합을 구함
 * 그 조합중에 가장 많이 나온 단품메뉴 조합을 answer에 담음
 */

function solution(orders, course) {
  const answer = [];
  course.forEach((c) => {
    const combinations = makeCombinations(orders, c); // 조합 생성
    const maxOrderCount = getMaxOrderCount(combinations); // 조합중에 가장 많이 나온 메뉴 의 수를 구함

    if (maxOrderCount !== 1) {
      const maxKey = getKeyByValue(combinations, maxOrderCount); // 가장 많이 나온 메뉴의 이름을 구함
      maxKey.forEach((key) => answer.push(key)); // answer에 담음
    }
  });
  return answer.sort();
}

// 배열을 받아서 조합을 생성
function makeCombinations(arr, selectNumber) {
  const combinations = {};
  for (const a of arr) {
    const orderCombination = getCombinations(a.split(""), selectNumber);
    orderCombination.forEach(
      (oc) => (combinations[oc] = (combinations[oc] || 0) + 1)
    );
  }
  return combinations;
}

// 해당 배열의 조합 구하기  (nCr)
function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 조합할 경우 그냥 리턴
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
    const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
    const attached = combinations.map((combination) =>
      [fixed, ...combination].sort().join("")
    ); //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });
  return results;
}

// 객체의 value 값으로 key를 구함
function getKeyByValue(object, value) {
  const result = [];
  Object.keys(object).forEach((key) => {
    if (object[key] === value) {
      result.push(key);
    }
  });
  return result;
}

// 객체즤 저장된 단품메뉴 조합에서 가장 많이 나온 메뉴 의 수를 구함
function getMaxOrderCount(combinations) {
  const valueArr = Object.keys(combinations).map((key) => combinations[key]);
  return Math.max.apply(null, valueArr);
}
