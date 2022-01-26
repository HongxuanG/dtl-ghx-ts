type MyExclude<T, U> = T extends U ? never : T

// function exclude(array, array) {
  
// }

// 所用到的知识点
// 1. 分布式条件类型
// --https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types