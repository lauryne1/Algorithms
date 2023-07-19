function isOddOrEven(number) {
  const result = number % 2;
  if (result === 0) {
    return " event";
  } else {
    return "odd";
  }
}
console.log(isOddOrEven(5));
