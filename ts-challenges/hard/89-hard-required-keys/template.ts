type RequiredKeys<T> = keyof {
  [key in keyof T as T[key] extends Required<T>[key] ? key : never]: T[key]
}