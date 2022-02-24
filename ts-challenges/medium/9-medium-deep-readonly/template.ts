// type DeepReadonly<T> = {
//   readonly [key in keyof T]: keyof T[key] extends never
//   ? T[key]
//   : DeepReadonly<T[key]>
// }
type DeepReadonly<T> = {
  readonly [key in keyof T]:
  T[key] extends Object
    ? T[key] extends Function
      ? T[key]
      : DeepReadonly<T[key]>
    :T[key]
}

// 所学知识点
// 1、mapped映射类型还能 递归
// 2、extends never
// 3、对象类型的递归  也叫索引类型的递归
