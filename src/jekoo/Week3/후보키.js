function solution(relation) {
  const N = relation[0].length;

  const candidateList = [];

  const getCandidate = (newRelation, numBinary) => {
    if (newRelation.length === [...new Set(newRelation)].length)
      candidateList.push(numBinary);
  };

  const eraseCandidate = (candiList) => {
    const M = candiList.length;
    const visit = new Array(M).fill(1);
    for (let i = 0; i < M - 1; i++) {
      for (let j = i + 1; j < M; j++) {
        if (
          candiList[i] ===
          (parseInt(candiList[i], 2) & parseInt(candiList[j], 2))
            .toString(2)
            .padStart(N, 0)
        ) {
          visit[j] = 0;
        }
      }
    }
    return visit.reduce((acc, cur) => acc + cur, 0);
  };

  const makeRelationList = (binary) => {
    const numBinary = binary.split("").map((e) => +e);
    const newRelation = relation
      .map((infos) => {
        return infos
          .map((info, idx) => {
            if (numBinary[idx]) return info;
          })
          .filter((e) => e !== undefined);
      })
      .map((e) => e.join(""));

    return [newRelation, numBinary];
  };

  for (let i = 1; i < 2 ** N; i++) {
    const [newR, numB] = makeRelationList(i.toString(2).padStart(N, 0));
    getCandidate(newR, numB.join(""));
  }
  return eraseCandidate(candidateList);
}
