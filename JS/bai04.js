function demSoNguyenTo(n) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (kiemTraNguyenTo(i)) count++;
    }
    return count;
  }
  