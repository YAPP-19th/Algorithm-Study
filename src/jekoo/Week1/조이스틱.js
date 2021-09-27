function solution(name) {
  const totalLen = name.length - 1;
  let nowIdx = 0;
  let countRow = 0;
  let countColumn = 0;

  const changeArrIdx = name
    .split('')
    .map((char, idx) => {
      if (char !== 'A') return idx;
    })
    .filter((e) => e !== undefined);

  changeArrIdx.forEach((idx) => {
    const ASCII = name.charCodeAt(idx);
    ASCII <= 78 ? (countColumn += ASCII - 65) : (countColumn += 91 - ASCII);
  });

  while (changeArrIdx.length > 0) {
    const leftIdx = changeArrIdx[0];
    const rightIdx = changeArrIdx[changeArrIdx.length - 1];
    if (nowIdx === leftIdx) {
      changeArrIdx.shift();
      continue;
    }
    if (nowIdx > rightIdx) {
      countRow += nowIdx - changeArrIdx[0];
      break;
    }

    if (leftIdx - nowIdx <= totalLen - rightIdx + nowIdx + 1) {
      countRow += leftIdx - nowIdx;
      nowIdx = leftIdx;
      changeArrIdx.shift();
    } else {
      countRow += totalLen - rightIdx + nowIdx + 1;
      nowIdx = rightIdx;
      changeArrIdx.pop();
    }
  }

  return countColumn + countRow;
}
