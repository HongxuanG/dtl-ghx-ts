type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [key in K]: T[key]
} & {
  [key in Exclude<keyof T, K>]: T[key]
}

interface Todo1 {
  title: string
  description?: string
  completed: boolean
}
type f = MyReadonly2<Todo1, 'title' | 'description'>

// 所学知识点
// 1. & 类型约束
// 2. 泛型的默认参数 如何定义？ = 等于号
// 