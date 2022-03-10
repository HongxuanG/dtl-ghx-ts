type IsRequiredKey<T, K extends keyof T> =
  (K extends K
    ? undefined extends T[K]
      ? false
      : true
    : never) extends true ? true : false

// type IsRequiredKey<T, K extends keyof T> =
//   (K extends keyof T 
//     ? T extends Required<Pick<T, K>> 
//       ? true 
//       : false : never) extends true ? true : false