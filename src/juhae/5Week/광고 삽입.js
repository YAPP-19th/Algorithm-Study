const time2sec = (time) => {
  let seconds = 0;
  const [h, m, s] = time.split(':');

  seconds += +s;
  seconds += +m * 60;
  seconds += +h * 60 * 60;

  return seconds;
};

const sec2time = (seconds) => {
  let hh = parseInt(seconds / (60 * 60));
  let mm = parseInt(seconds / 60) % 60;
  let ss = seconds % 60;

  hh = `0${hh}`.slice(-2);
  mm = `0${mm}`.slice(-2);
  ss = `0${ss}`.slice(-2);

  return `${hh}:${mm}:${ss}`;
};

function solution(play_time, adv_time, logs) {
  const play_time_sec = time2sec(play_time);
  const adv_time_sec = time2sec(adv_time);
  let total_time = new Array(play_time_sec).fill(0);

  logs.forEach((log) => {
    let [start, end] = log.split('-');

    start = time2sec(start);
    end = time2sec(end);
    total_time[start]++;
    total_time[end]--;
  });

  // 시청자 수
  for (let i = 1; i < play_time_sec; i++) {
    total_time[i] += total_time[i - 1];
  }

  // 누적 재생 횟수
  for (let i = 1; i < play_time_sec; i++) {
    total_time[i] += total_time[i - 1];
  }

  let max_idx = 0;
  let max_play_sec = total_time[adv_time_sec - 1];
  for (let i = adv_time_sec + 1; i < play_time_sec; i++) {
    if (max_play_sec < total_time[i] - total_time[i - adv_time_sec]) {
      max_play_sec = total_time[i] - total_time[i - adv_time_sec];
      max_idx = i - adv_time_sec + 1;
    }
  }
  return sec2time(max_idx);
}

console.log(
  solution('02:03:55', '00:14:15', [
    '01:20:15-01:45:14',
    '00:40:31-01:00:00',
    '00:25:50-00:48:29',
    '01:30:59-01:53:29',
    '01:37:44-02:02:30'
  ])
);

// console.log(
//   solution('99:59:59', '25:00:00', [
//     '69:59:59-89:59:59',
//     '01:00:00-21:00:00',
//     '79:59:59-99:59:59',
//     '11:00:00-31:00:00'
//   ])
// );
