// Instruction: Compute the length of a string literal, which behaves like String#length.
// 递归字符串 转成 数组
//  S extends '' ? [] 用于 中断递归
type StringToArray<S extends string> = S extends ''
  ? []
  : S extends `${infer A}${infer B}`
  ? [A, ...StringToArray<B>]
  : never
// ['length']获得数组的长度
type LengthOfString<S extends string> = StringToArray<S>['length']

// 另一种解法：
/**
 *  参数多一个CountArr 用于填充
 *  LengthOfString1 每递归一次
 *  CountArr 的 length +1
 * */
type LengthOfString1<
  S extends string,
  CountArr extends unknown[] = []
> = S extends `${string}${infer Rest}`
  ? LengthOfString1<Rest, [...CountArr, unknown]>
  : CountArr['length']
