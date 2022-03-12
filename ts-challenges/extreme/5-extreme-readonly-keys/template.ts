type GetReadonlyKeys<T extends Record<string, any>> = keyof {
  [K in keyof T as equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? K : never]: T[K]
}
