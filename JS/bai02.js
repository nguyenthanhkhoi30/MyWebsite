function fibonacci(n) {
    let a = 0, b = 1, c;
    if (n === 0) return 0;
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  