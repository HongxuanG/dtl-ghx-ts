// Instruction: Compute the length of a string literal, which behaves like String#length.
// 递归字符串 转成 数组
//  S extends '' ? [] 用于 中断递归
type StringToArray<S extends string> = S extends '' ? [] : S extends `${infer A}${infer B}` ? [A, ...StringToArray<B>] : never
// ['length']获得数组的长度
type LengthOfString<S extends string> = StringToArray<S>['length']
