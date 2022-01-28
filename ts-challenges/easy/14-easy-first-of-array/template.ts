// 第一种解法
// type First<T extends any[]> = T extends [] ? never : T[0]

// 第二种解法
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]



// 第三种解法
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

type s = 2 | 1 | 3
type a = 1 extends s ? 'true' : 'false'

// 第四种解法
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never


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
