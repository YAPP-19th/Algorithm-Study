const solution = (s) => {
  const answer = s
    .slice(2, -2)
    .split('},{')
    .map((c) => c.split(','))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cur) => [...acc, ...cur])
    .map((e) => +e);
  return [...new Set(answer)];
};
