type DeepReadonly<T> = {
  readonly [key in keyof T]: keyof T[key] extends never ? T[key] : DeepReadonly<T[key]>
}

// 所学知识点
// 1、mapped映射类型还能 递归
// 2、extends never
