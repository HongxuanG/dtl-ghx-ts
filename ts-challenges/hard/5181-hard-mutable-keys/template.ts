type MutableKeys<T extends Record<string, any>, K extends keyof T = keyof T> = 
  K extends K
    ? equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
      ? never
      : K
    : never
