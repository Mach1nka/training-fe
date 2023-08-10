export function capitalizeLetter(str: string | undefined): string {
  if (!str) {
    return '';
  }
  const firstChar = str[0].toUpperCase();
  return `${firstChar}${str.slice(1)}`;
}
