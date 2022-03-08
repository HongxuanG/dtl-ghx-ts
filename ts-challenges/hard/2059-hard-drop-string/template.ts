/**
 * string转Union
 */
type MyStringToUnion<S extends string> = S extends `${infer First}${infer Rest}` ? First | MyStringToUnion<Rest> : never
/**
 * R 是一个union类型
 */
type DropStringHandler<S, R extends string> = 
  S extends `${infer First}${infer Suf}`
    ? First extends R 
      ? `${DropStringHandler<Suf, R>}`
      : `${First}${DropStringHandler<Suf, R>}`
    : S
/**
 * 先把R转成union类型
 */
type DropString<S extends string, R extends string> = DropStringHandler<S, MyStringToUnion<R>>