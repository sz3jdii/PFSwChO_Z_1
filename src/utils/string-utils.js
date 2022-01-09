export function stringIsNaturalNumber(string) {
  return /^(0|[1-9]\d*)$/.test(string);
}
