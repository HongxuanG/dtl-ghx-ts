// 获取函数的参数
type MyParameters<T extends Function> = T extends (...args: infer P) => unknown ? P : never


// function parameters(...args: any[]) {
//   return args
// }

// 所学知识
// 1.主要是 infer 针对 函数的使用
// 2.infer搭配extends条件类型使用