// * 정확성만 맞고 효율성은 계속 틀려서 구글링해서 풀었습니다 ㅠ

// 내가 푼 코드 (정확성O, 효율성X)
function solution(info, query) {
  let answer = [];
  const arrQuery = query
    .map((q) => q.replace(/and/g, ""))
    .map((q) => q.split("  "));
  const arrInfo = info.map((i) => i.split(" "));

  arrQuery.forEach((q, index) => {
    const count = correctCheck(q, arrInfo);
    answer.push(count);
  });
  return answer;
}

function correctCheck(q, arrInfo) {
  const lastQuery = q[3].split(" ");
  let count = 0;
  for (let i = 0; i < arrInfo.length; i++) {
    if (q[0] !== "-" && q[0] !== arrInfo[i][0]) {
      continue;
    }
    if (q[1] !== "-" && q[1] !== arrInfo[i][1]) {
      continue;
    }
    if (q[2] !== "-" && q[2] !== arrInfo[i][2]) {
      continue;
    }
    if (lastQuery[0] !== "-" && lastQuery[0] !== arrInfo[i][3]) {
      continue;
    }
    if (Number(lastQuery[1]) > Number(arrInfo[i][4])) {
      continue;
    }
    count++;
  }
  return count;
}

// 블로그 보고 푼 코드 (정확성O, 효율성O)
function solution(info, query) {
  let answer = [];
  const map = {};

  function combination(infos, score, map, start) {
    let key = infos.join(""); // 키 값으로 쓸거 합쳐주기
    let value = map[key]; // 값 있는지 없는지 확인해주기

    // 값이 있으면 push 값이 없으면 프로퍼티 만들어주기
    value ? map[key].push(score) : (map[key] = [score]);

    // -를 이용해 조합 만들기
    for (let i = start; i < infos.length; i++) {
      let combiArr = [...infos];
      combiArr[i] = "-";
      combination(combiArr, score, map, i + 1);
    }
  }

  // 이분탐색
  function binarySearch(map2, key2, score2) {
    let scoreArr = map2[key2];

    if (scoreArr) {
      let start = 0;
      let end = scoreArr.length;

      while (start < end) {
        let mid = Math.floor((start + end) / 2);

        if (scoreArr[mid] >= score2) {
          // 현재 가르키는 값보다 내가 찾는 값이
          end = mid;
        } else if (scoreArr[mid] < score2) {
          start = mid + 1;
        }
      }
      return scoreArr.length - start;
    } else return 0;
  }

  // 1. -로 가능한 모든 조합 만들기
  for (let i = 0; i < info.length; i++) {
    let infos = info[i].split(" ");
    let score = infos.pop();
    combination(infos, score, map, 0);
  }

  // 2. 이분탐색을 위해 정렬
  for (const key in map) {
    map[key].sort((o1, o2) => o1 - o2);
  }

  // 3. 이분탐색 실행
  for (let i = 0; i < query.length; i++) {
    let querys = query[i].replace(/ and /g, "").split(" ");
    let score = Number(querys.pop());
    answer.push(binarySearch(map, querys.join(""), score));
  }

  return answer;
}
