type Coppy<T extends Record<string, any>> = { [key in keyof T]: T[key] }

type PartialByKeys<T, K extends keyof T | unknown = keyof T> = Coppy<{
  [key in keyof T as key extends K ? never : key]: T[key]
  } & {
  [key in keyof T as key extends K ? key : never]?: T[key]
}>
