export const countToN = (n: number): void => {
  if (isNaN(n)) {
    throw new Error(`NaN passed to countN`)
  }
  for (let i = 0; i < n; i++) {
    chat.log(String(i+1))
  }
}