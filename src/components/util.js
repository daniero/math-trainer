export function randomInteger(from, to) {
  const range = to - from + 1;
  return Math.floor(Math.random() * range) + from;
}
