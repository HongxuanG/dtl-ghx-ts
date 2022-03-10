// 我写的
// type ObjectFromEntriesHandler<T> =
//   T extends [infer K, infer V]
//     ? K extends string
//       ? {
//         [key in K]: V
//       } : never
//     : never
// type Cpy<T> = {
//   [K in keyof T]: T[K]
// }
// type ObjectFromEntries<T extends unknown[]> = Cpy<UnionToIntersection<ObjectFromEntriesHandler<T>>>
 /**
 * 把 ModelEntries 是union类型 用分布式条件类型
 * T 放 extends 左边
 * 还要把结果从union转成Intersection
 * 在copy一份出来
 */


// 下面是大佬的解决方案
type ObjectFromEntries<T extends [string, unknown]> = {
  [K in T as K[0]]: K[1]
}