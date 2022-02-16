// Instruction： Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

type TrimLeft<S extends string> = S extends `${' ' | '\t' | '\n'}${infer Rest}` ? TrimLeft<Rest> : S

// 解决方案参考
// --https://juejin.cn/post/7045536402112512007

// 所学知识
// 1、Template Literal Types  利用模板字面量类型
// --https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html#string-unions-in-types
// 2、递归思路
// 如果前面还有空格或者\t \n 转义字符，则继续调用 TrimLeft<Rest> 直到conditional type 被判断为false为止，输出 S
// 3、infer 待推断类型
// 取出剩下的Rest字符串