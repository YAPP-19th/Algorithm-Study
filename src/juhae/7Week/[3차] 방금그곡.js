const get_minutes = (start, end) => {
  let minutes = 0;
  const [s_hh, s_mm] = start.split(':');
  const [e_hh, e_mm] = end.split(':');

  minutes = (+e_hh - +s_hh) * 60 + (+e_mm - +s_mm);
  return minutes;
};

const solution = (m, musicInfos) => {
  let answer = '';
  m = m.replace(/[A-Z]#/g, (m) => m[0].toLowerCase());

  musicInfos = musicInfos.map((musicinfo) => {
    let arr = musicinfo.split(',');
    let minutes = get_minutes(arr[0], arr[1]);
    let melody = arr[3].replace(/[A-Z]#/g, (ele) => ele[0].toLowerCase());
    melody = melody.repeat(Math.ceil(minutes / melody.length)).substr(0, minutes);
    return [minutes, melody, arr[2]];
  });

  musicInfos.sort((a, b) => b[0] - a[0]);
  answer = musicInfos.filter((ele) => ele[1].indexOf(m) !== -1);

  return answer.length == 0 ? '(None)' : answer[0][2];
};

// console.log(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF']));
// console.log(solution('CC#BCC#BCC#BCC#B', ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B']));
// console.log(solution('ABC', ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF']));
// console.log(solution('ABC', ['12:00,12:15,CDF,ABC#ABC']));
// console.log(solution('E#C', ['12:00,12:09,HI,CC#D#E#']));
// console.log(solution('DF', ['6:20,6:50,TEST,DDF']));
// console.log(solution('CCB', ['03:00,03:10,FOO,CCB#CCB', '04:00,04:08,BAR,ABC']));
// console.log(solution('ABC', ['12:00,12:03,HI,ABC#']));
// console.log(solution('AB', ['00:00,00:04,ME,ABC#D#']));
