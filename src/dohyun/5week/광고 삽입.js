// 너무 어려워서  아래 블로그 보고 했습니다 
// https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EA%B4%91%EA%B3%A0-%EC%82%BD%EC%9E%85-JS

function solution(play_time, adv_time, logs) {
  const pt = calculateTime(play_time);
  const at = calculateTime(adv_time);
  const times = new Array(pt).fill(0);

  logs.forEach((log) => {
    const [start, end] = log.split("-");
    const ws = calculateTime(start);
    const we = calculateTime(end);
    times[ws]++;
    times[we]--;
  });

  for (let i = 1; i <= pt; i++) times[i] += times[i - 1];

  for (let i = 1; i <= pt; i++) times[i] += times[i - 1];

  let sum = times[at - 1];
  let idx = 0;

  for (let i = at - 1; i < pt; i++) {
    if (sum < times[i] - times[i - at]) {
      sum = times[i] - times[i - at];
      idx = i - at + 1;
    }
  }

  return formatterTime(idx);
}

const calculateTime = (time) => {
  const HHMMSS = time.split(":");
  const amount = HHMMSS[0] * 3600 + HHMMSS[1] * 60 + HHMMSS[2] * 1;
  return amount;
};

const formatterTime = (time) => {
  let HH = (time / 3600) >> 0;
  let MM = ((time / 60) >> 0) % 60;
  let SS = time % 60;

  HH = HH > 9 ? HH : "0" + HH;
  MM = MM > 9 ? MM : "0" + MM;
  SS = SS > 9 ? SS : "0" + SS;

  return `${HH}:${MM}:${SS}`;
};
