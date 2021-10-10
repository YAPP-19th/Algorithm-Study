let visits = [];
let keys = [];

function solution(relation) {
  const columsLength = relation[0].length;
  const keys = createKeys(0, columsLength);

  return keys
    .filter((key) => isUniqueness(key, relation))
    .filter((key, _, mySelf) => isMinimality(key, mySelf)).length;
}

function createKeys(n, max) {
  if (n === 0) {
    keys = [];
    visits = new Array(max);
    visits.fill(false, 0, max);
  }
  if (n === max) {
    const key = makeKey();

    if (key.length > 0) {
      keys.push(key);
    }
  } else {
    visits[n] = false;
    createKeys(n + 1, max);
    visits[n] = true;
    createKeys(n + 1, max);
    return keys;
  }
}

function makeKey() {
  const key = [];
  for (const [index, value] of visits.entries()) {
    if (value) key.push(index);
  }
  return key;
}

function isUniqueness(key, relation) {
  for (let i = 0; i < relation.length; i++) {
    for (let j = i + 1; j < relation.length; j++) {
      if (getKeyData(key, relation[i]) === getKeyData(key, relation[j])) {
        return false;
      }
    }
  }
  return true;
}

function isMinimality(key, keys) {
  return keys.every((item) => {
    if (key === item) {
      return true;
    } else {
      return !item.every((col) => key.includes(col));
    }
  });
}

function getKeyData(key, row) {
  let data = "";
  key.forEach((col) => {
    data += `${row[col]}|`;
  });
  return data;
}

const relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];

console.log(solution(relation));
