type Merge<F, S> = {
  [key in keyof F | keyof S]: key extends keyof S
    ? S[key]
    : key extends keyof S
    ? S[key]
    : key extends keyof F
    ? F[key]
    : never
}
/**
 * keyof F | keyof S 起到关键作用
 */
