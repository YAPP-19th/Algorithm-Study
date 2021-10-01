function solution(enter, leave) {
  const N = enter.length;
  const answer = new Array(N).fill(0);
  const enterVisit = new Array(N).fill(false);
  const room = {};
  let enterIdx = 0;

  const meet = (p) => {
    if (enterVisit[p - 1]) return;
    while (enterIdx < N) {
      Object.keys(room).forEach((person) => (answer[+person - 1] += 1));
      answer[enter[enterIdx] - 1] += Object.keys(room).length;
      room[enter[enterIdx]] = true;
      enterVisit[enter[enterIdx] - 1] = true;
      enterIdx += 1;
      if (enter[enterIdx - 1] === p) {
        break;
      }
    }
  };

  leave.forEach((person) => {
    meet(person);
    delete room[person];
  });

  return answer;
}
