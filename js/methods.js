function step (a, b, n) {
  if (b > a && n > 0)
    return (b - a) / n;
  return -1;
}

function sum (fxi, i, n, step = 1) {
  if (Array.isArray(fxi)) {
    let sum = 0;
    for (let index = i; index < n; index += step) {
      sum += Number(fxi[index]);
    }
    return sum;
  }
  return -1;
}

function xs (a, b, step) {
  if (b > a && step > 0) {
    let  x = [];
    // debugger;
    for (let i = a; i <= b; i += step)
      x.push(i);
    return x;
  }
  return null;
}

function trapecio (fx, a, b, n) {
  if (Array.isArray(fx) && fx.length > 3 && fx.indexOf('') === -1) {
    const fx0 = Number(fx[0]);
    const fxn = Number(fx[fx.length - 1]);
    return (b - a) * ((fx0 + 2 * sum(fx, 1, fx.length - 1) + fxn) / (2 * n));
  }
  return -1;
}

function simpson13 (fx, a, b, n) {
  if (Array.isArray(fx) && fx.length > 3 && fx.indexOf('') === -1) {
    const fx0 = Number(fx[0]);
    const fxn = Number(fx[fx.length - 1]);
    return (b - a) * ((fx0 + (4 * sum(fx, 1, fx.length - 1, 2)) + (2 * sum(fx, 2, fx.length - 2, 2)) + fxn) / (3 * n));
  }
  return -1;
}
