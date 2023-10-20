export function formatNumber(value: number): string {
  let valueStr = value.toFixed(2);
  const index = valueStr.indexOf(".");
  if (index > -1) {
    const numOfDigits = valueStr.length - index;
    if (numOfDigits == 1) valueStr += "0";
  }

  return valueStr;
}
