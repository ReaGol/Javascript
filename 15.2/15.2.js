function findSmallest(a, b, c) {
  if ((a > b && b > c) || (b > a && a > c)) {
    console.log(c);
    return c;
  } else if ((c > b && b > a) || (b > c && c > a)) {
    console.log(a);
    return a;
  } else {
    console.log(b);
    return b;
  }
}
findSmallest(52, 66, 2);
