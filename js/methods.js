function step (b, a, n) {
  return (b - a) / n;
}

function sum (fxi, i, n, step = 1) {
  if (Array.isArray(fxi)) {
    let sum = 0;
    for (let index = i; index < n; index += step) {
      sum += fxi[index];
    }
    return sum;
  }
  return -1;
}

function xs (b, a, step) {
  let  x = [];
  for ( ; a <= b; a += step) {
    x.push(a);
  }
  return x;
}

function trapecio (b, a, n) {

}