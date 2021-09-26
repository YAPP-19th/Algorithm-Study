function solution(name) {
  let answer = 0;
  let currentIndex = 0;

  const LENGTH = name.length;
  const ASCII_A = "A".charCodeAt(0);
  const ASCII_N = "N".charCodeAt(0);
  const ASCII_Z = "Z".charCodeAt(0);

  name = name.split("");

  while (true) {
    // 탈출문, 전부 A 이면 탈출 조건 완료
    if (name.join("") === "A".repeat(LENGTH)) break;
    let moveCount = 1;

    // 1. 현재 인덱스가 A 가 아니라면 A 로 바꾸기!
    if (name[currentIndex] !== "A") {
      name[currentIndex].charCodeAt(0) < ASCII_N
        ? (answer += name[currentIndex].charCodeAt(0) - ASCII_A)
        : (answer += ASCII_Z - name[currentIndex].charCodeAt(0) + 1);

      name[currentIndex] = "A";
    } else {
      /*  2. 현재 인덱스가 A 면 "좌, 우"로
      A 가 아닌 인덱스를 찾아 이동 */

      while (true) {
        if (name[(currentIndex + moveCount) % LENGTH] !== "A") {
          currentIndex += moveCount;
          answer += moveCount;
          break;
        } else if (name[currentIndex - moveCount] !== "A") {
          currentIndex =
            currentIndex - moveCount < 0
              ? LENGTH - (moveCount - currentIndex)
              : currentIndex - moveCount;
          answer += moveCount;
          break;
        }
        moveCount++;
      }
    }
  }

  return answer;
}
