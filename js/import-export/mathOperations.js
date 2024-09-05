export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  if (b === 0 || a === 0) {
    return "На нуль ділити не можна!";
  }
  return a / b;
}
