type Flip<T extends Record<string, any>> = {
  [key in keyof T as `${T[key]}`]: key
}