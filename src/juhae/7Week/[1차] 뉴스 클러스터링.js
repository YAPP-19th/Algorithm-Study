Set.prototype.union = function (setB) {
  let union = new Set(this);
  for (let elem of setB) {
    union.add(elem);
  }
  return union;
};

Set.prototype.intersection = function (setB) {
  let intersection = new Set();
  for (let elem of setB) {
    if (this.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
};

const get_multi_set = (str) => {
  const multi_set = [];
  for (let i = 0; i < str.length - 1; i++) {
    const temp = str.substring(i, i + 2);

    if (temp.match(/^[A-Z]+$/)) multi_set.push(str.substring(i, i + 2));
  }
  return multi_set;
};

const solution = (str1, str2) => {
  let inter_set = new Set();
  let union_set = new Set();
  let inter_cnt = 0;
  let union_cnt = 0;

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  const multi_set1 = get_multi_set(str1);
  const multi_set2 = get_multi_set(str2);

  if (!multi_set1.length && !multi_set2.length) {
    return 1 * 65536;
  }

  const single_set1 = new Set(multi_set1);
  const single_set2 = new Set(multi_set2);
  inter_set = single_set1.intersection(single_set2);
  union_set = single_set1.union(single_set2);

  inter_set.forEach((ele1) => {
    inter_cnt += Math.min(
      multi_set1.filter((ele2) => ele1 === ele2).length,
      multi_set2.filter((ele2) => ele1 === ele2).length
    );
  });

  union_set.forEach((ele1) => {
    union_cnt += Math.max(
      multi_set1.filter((ele2) => ele1 === ele2).length,
      multi_set2.filter((ele2) => ele1 === ele2).length
    );
  });
  return Math.floor((inter_cnt / union_cnt) * 65536);
};

// console.log(solution('FRANCE', 'french'));
// console.log(solution('handshake', 'shake hands'));
// console.log(solution('aa1+aa2', 'AAAA12'));
// console.log(solution('E=M*C^2', 'e=m*c^2'));
