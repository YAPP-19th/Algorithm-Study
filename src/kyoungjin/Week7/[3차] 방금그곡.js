function solution(m, musicinfos) {
  const getMelody = (melody) => {
    return melody
      .replace(/C#/g, "c")
      .replace(/D#/g, "d")
      .replace(/F#/g, "f")
      .replace(/G#/g, "g")
      .replace(/A#/g, "a");
  };

  const parsedInfos = musicinfos.map((music) => {
    const info = music.split(",");
    const startTime = info[0].split(":").map((num) => parseInt(num));
    const endTime = info[1].split(":").map((num) => parseInt(num));
    const second = (endTime[0] - startTime[0]) * 60 + endTime[1] - startTime[1];
    const parsedMelody = getMelody(info[3]);

    let melody = "";
    if (parsedMelody.length >= second) {
      melody = parsedMelody.substr(0, second);
    } else {
      while (melody.length < second) {
        melody += parsedMelody;
      }

      melody = melody.substr(0, second);
    }

    return [info[2], second, melody];
  });

  const userMelody = getMelody(m);
  const results = [];
  parsedInfos.forEach((info) => {
    if (info[2].includes(userMelody)) {
      results.push(info);
    }
  });

  results.sort((a, b) => {
    return b[1] - a[1];
  });

  return results.length ? results[0][0] : "(None)";
}

solution("CC#BCC#BCC#BCC#B", [
  "03:00,03:30,FOO,CC#B",
  "04:00,04:08,BAR,CC#BCC#BCC#B",
  "04:00,04:05,test,abcdef",
]);
