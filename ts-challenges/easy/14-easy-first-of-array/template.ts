// 第一种解法
// type First<T extends any[]> = T extends [] ? never : T[0]

// 第二种解法
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 第三种解法
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

type s = 2 | 1 | 3
type a = 1 extends s ? 'true' : 'false'

// 第四种解法
type First<T extends unknown[]> = T extends [infer First, ...unknown[]]
  ? First
  : never
// type First<T extends any[]> = T extends [infer First, ...any[]] ? First : never

/*
  any和unknown的区别：
    相同点：都代表任何类型
    不同点：
      unknown只能接收任何类型的值
      any 接收任何类型的值，也可以赋值给任何类型
*/

// function first(array) {
//   return array[0]
// }

// 所用知识
// 1. extends 条件推断   conditional type
// --https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#conditional-type-constraints
// 2. indexed 索引类型  获取tuple元组的length
// --https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// 3. extends 加 union 推断     T[number]可以获取元组里面的值
// 4. infer 解构元组 配合 extends使用的
// --https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
