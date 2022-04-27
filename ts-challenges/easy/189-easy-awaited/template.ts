type MyAwaited<T extends Promise<any>> = T extends Promise<infer S>
  ? S extends Promise<any>
  ? MyAwaited<S>
  : S
  : T

// async function Myawaited(Promise: Promise<any>) {
//   let returnValue
//   if (typeof Promise === '') {
//     returnValue = await Promise
//     return returnValue

//   } else {
//     Myawaited(Promise)
//   }
// }

// 所用到的知识点
// 1. 递归
// 2. infer 推断 表示在 extends 条件语句中待推断的类型变量。

