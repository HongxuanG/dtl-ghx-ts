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
// 1. 泛型 参数的设置默认值
// 2. 