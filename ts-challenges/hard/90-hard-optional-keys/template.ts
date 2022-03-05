type OptionalKeys<T> = keyof {
  [key in keyof T as {} extends Pick<T, key> ? key : never]: T[key]
}
