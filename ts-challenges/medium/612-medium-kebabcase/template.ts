// 这题没做出来
// 串烧命名法
type KebabCase<
  S extends string,
  P extends string = ''
> = S extends `${infer A}${infer B}`
  ? A extends Lowercase<A>
    ? `${A}${KebabCase<B, '-'>}`
    : `${P}${Lowercase<A>}${KebabCase<B, '-'>}`
  : S
