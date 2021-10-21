const { max } = Math;

function solution(priorities, location) {
  let answer = 0;

  const docs = [...priorities];
  docs[location] = "정답";

  while (true) {
    if (priorities[0] === max(...priorities) && docs[0] === "정답") {
      return ++answer;
    } else if (priorities[0] !== max(...priorities)) {
      priorities.push(priorities.shift());
      docs.push(docs.shift());
    } else {
      priorities.shift();
      docs.shift();
      answer++;
    }
  }
}
