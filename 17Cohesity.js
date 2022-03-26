const solution = (a, queries) => {
  let result = 0;

  for (let i = 0; i < queries.length; i++) {
    let l = queries[i][0];
    let r = queries[i][1];
    let x = queries[i][2];
    let count = 0;

    const subArray = a.slice(l, r + 1);
    for (let num of subArray) {
      if (num === x) count++;
    }
    result += count;
  }
  console.log(result);
};

const a1 = [1, 2, 1, 3, 1, 2, 1];
const queries1 = [
  [1, 3, 3],
  [0, 4, 1],
  [2, 5, 2],
  [5, 6, 1],
];

const a2 = [5];
const queries2 = [[0, 0, 5]];

const a3 = [5];
const queries3 = [
  [0, 0, 1],
  [0, 0, 2],
  [0, 0, 3],
  [0, 0, 4],
  [0, 0, 5],
  [0, 0, 6],
  [0, 0, 7],
  [0, 0, 1],
  [0, 0, 2],
  [0, 0, 3],
  [0, 0, 4],
  [0, 0, 5],
  [0, 0, 6],
  [0, 0, 7],
];

const a4 = [3, 4];
const queries4 = [
  [0, 0, 3],
  [0, 0, 4],
  [0, 1, 3],
  [0, 1, 4],
  [1, 1, 3],
  [1, 1, 4],
  [0, 1, 1],
];

const a5 = [1, 2, 3];
const queries5 = [
  [0, 0, 1],
  [0, 1, 1],
  [0, 2, 1],
  [1, 1, 1],
  [1, 2, 1],
  [2, 2, 1],
  [0, 0, 2],
  [0, 1, 2],
  [0, 2, 2],
  [1, 1, 2],
  [1, 2, 2],
  [2, 2, 2],
  [0, 0, 3],
  [0, 1, 3],
  [0, 2, 3],
  [1, 1, 3],
  [1, 2, 3],
  [2, 2, 3],
];

solution(a1, queries1);
solution(a2, queries2);
solution(a3, queries3);
solution(a4, queries4);
solution(a5, queries5);

