type If<C extends Boolean, T, F> = C extends true ? T : F

// function IIf(boolean: Boolean, truthy: any, falsy: any) {
//   if (boolean) {
//     return truthy
//   } else {
//     return falsy
//   }
// }

// 所用知识点
// 1. conditional type
