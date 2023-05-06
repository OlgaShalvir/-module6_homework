function isPrime(x) {
  if (x <= 1 || x > 1000) {
    return "Данные неверны";
  }
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return "Не простое число";
    }
  }
  return "Простое число";
}

console.log(isPrime(13));
console.log(isPrime(14))