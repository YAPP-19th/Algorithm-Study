const getSecond = (time) => {
  const splitedTime = time.split(":");

  return splitedTime[0] * 3600 + splitedTime[1] * 60 + splitedTime[2] * 1;
};

const getTime = (second) => {
  let h = parseInt(second / 3600);
  second %= 3600;
  let m = parseInt(second / 60);
  second %= 60;
  let s = parseInt(second);

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  return h + ":" + m + ":" + s;
};

function solution(play_time, adv_time, logs) {
  let answer = 0;
  const playTime = getSecond(play_time);
  const advTime = getSecond(adv_time);

  const playList = new Array(playTime).fill(0);

  logs.forEach((time) => {
    let times = time.split("-");
    const startTime = getSecond(times[0]);
    const endTime = getSecond(times[1]);

    playList[startTime] += 1;
    playList[endTime] -= 1;
  });

  // 해당 시간, 시청자 수
  for (let i = 1; i < playTime; i++) {
    playList[i] += playList[i - 1];
  }

  // 해당 시간, 누적 재생 수
  for (let i = 1; i < playTime; i++) {
    playList[i] += playList[i - 1];
  }

  let accumulate = playList[advTime - 1];
  let startTime = 0;
  for (let tempTime = 0; tempTime < playTime; tempTime++) {
    if (playList[tempTime + advTime] - playList[tempTime] > accumulate) {
      accumulate = playList[tempTime + advTime] - playList[tempTime];
      startTime = tempTime + 1; // 배열의 인덱스에서 다시 시간으로 바꾸기 위해 +1
    }
  }

  answer = getTime(startTime);

  return answer;
}
