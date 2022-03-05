type MyReturnType<T extends Function> = T extends (...args: any) => infer P
  ? P
  : never

// 所学知识
// 这一题typescript的官方文档就有
// --https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
// 通过infer 待推断的类型变量
