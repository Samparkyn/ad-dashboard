export const parseMoney = (value) => {
  const isWhole = Number.isInteger(value);

  if (isWhole) {
    return `${value}.-`
  }

  return value.toString();
}