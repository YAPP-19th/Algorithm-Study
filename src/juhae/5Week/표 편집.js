const Node = function (idx, prev) {
  this.idx = idx;
  this.prev = prev;
  this.next = null;
};

const init = (n, k) => {
  let prevNode = null;
  let current = null;

  for (let i = 0; i < n; i++) {
    const node = new Node(i, prevNode);
    if (i == k) {
      current = node;
    }
    if (prevNode) {
      prevNode.next = node;
    }
    prevNode = node;
  }
  return current;
};

function solution(n, k, cmds) {
  let answer = new Array(n);
  for (let i = 0; i < n; i++) {
    answer[i] = 'O';
  }

  let current = init(n, k);
  const history = [];

  cmds.forEach(ele => {
    let [cmd, x] = ele.split(' ');

    if (cmd === 'U') {
      for (let i = 0; i < x; i++) {
        if (!current.prev) {
          break;
        }
        current = current.prev;
      }
    } else if (cmd === 'D') {
      for (let i = 0; i < x; i++) {
        if (!current.next) {
          break;
        }
        current = current.next;
      }
    } else if (cmd === 'C') {
      history.push(current);
      if (current.prev && current.next) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current = current.next;
      } else if (current.prev) {
        current.prev.next = null;
        current = current.prev;
      } else if (current.next) {
        current.next.prev = null;
        current = current.next;
      }
    } else if (cmd === 'Z') {
      const node = history.pop();
      if (node.prev) {
        node.prev.next = node;
      }
      if (node.next) {
        node.next.prev = node;
      }
    }
  });

  history.map(node => {
    answer[node.idx] = 'X';
  });

  return answer.join('');
}

console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']));
console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z', 'U 1', 'C']));
