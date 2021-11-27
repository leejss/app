export function swap<T>(arr: T[], from: number, to: number): T[] {
  const newArr = [...arr];
  const temp = newArr[to];
  newArr[to] = newArr[from];
  newArr[from] = temp;
  return newArr;
}
