const sum = (
  arr:
    | string[]
    | [[[string], string], [string], [[string], [string], string]]
    | [[string, string], [string, string, string]]
): number => {
  const a = arr.flat(Infinity);
  const b = [... new Array<string>];

  let d: string = "";

  for (let i = 0; i < a.length; i++) {
    if (parseInt(a[i] as string) == (a[i] as unknown as number)) {
      b.push(a[i] as string);
    } else {
      for (let j = 0; j < a[i].length; j++) {
        if (
          (a[i] as string).charCodeAt(j) >= 48 &&
          (a[i] as string).charCodeAt(j) <= 57
        ) {
          if ((a[i] as string).charCodeAt(j - 1) === 45) {
            d += a[i][j - 1];
          }
          d += a[i][j];
        } else if (
          (a[i] as string).charCodeAt(j) < 48 ||
          (a[i] as string).charCodeAt(j) > 57
        ) {
          b.push(d);
          d = "";
        }
      }
      b.push(d);
      d = "";
    }
  }

  const nums = [... new Array<number>];
  for (let i = 0; i < b.length; i++)
    if (b[i] !== "") nums.push(parseInt(b[i] as string));
  return nums.reduce((prev, curr) => prev + curr);
};

console.log(sum(["1", "five", "2wenty", "thr33"]));
console.log(
  sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"], "-1s0"]])
);
console.log(
  sum([
    ["1X2", "t3n"],
    ["1024", "5", "64"],
  ])
);
