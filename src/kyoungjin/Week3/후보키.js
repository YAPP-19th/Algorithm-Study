const isUnique = (tuples) => {
  const temp = tuples.map((tuple) => tuple.join(""));

  return temp.length === new Set(temp).size ? true : false;
};

const combination = (arr, selectNum) => {
  const result = [];
  if (selectNum === 1) return arr.map((item) => [item]);

  arr.forEach((item, index, array) => {
    const fixed = item;
    const restArr = array.slice(index + 1);
    const restCombination = combination(restArr, selectNum - 1);
    const fixedCombination = restCombination.map((item) => [fixed, ...item]);
    result.push(...fixedCombination);
  });

  return result;
};

function solution(relation) {
  let answer = 0;

  const colSize = relation[0].length;
  const attributes = new Array(colSize).fill(0).map((value, index) => index);
  let attributesCom = []; // 후보키 조합
  for (let i = 0; i < colSize; i++) {
    attributesCom.push(...combination(attributes, i + 1));
  }

  while (attributesCom.length !== 0) {
    const attributes = attributesCom.shift();
    const tuples = relation.map((row) =>
      attributes.map((attribute) => row[attribute])
    );

    // 유일설 검사
    if (isUnique(tuples)) {
      answer++;
      // 희소성 검사
      const nextAttributesCom = [];
      attributesCom.map((temp) => {
        attributes.map((attribute) => {
          if (!temp.includes(attribute)) {
            nextAttributesCom.push(temp);
          }
        });
      });

      // 기존에 사용한 후보키 제외하여 새로 할당
      attributesCom = nextAttributesCom;
    }
  }

  return answer;
}
