export function randomNumber(min: number, max: number, includeZero = false) {
  if (includeZero) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let num;
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (num === 0);
  return num;
}
