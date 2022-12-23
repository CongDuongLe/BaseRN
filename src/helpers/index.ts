export const getFaIconName = (name: string) => {
  const arr = name.split(' ').join('').split('-');
  return arr[arr.length - 1];
}
