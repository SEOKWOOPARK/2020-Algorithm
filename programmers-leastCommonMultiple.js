function solution(n, m) {
    let gcd = function(m, n) {
      let r = (m % n);
      return (r) ? gcd(n, r) : n;
    }
    return [gcd(m, n), ((m * n) / gcd(m, n))];
}
