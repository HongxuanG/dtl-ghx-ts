type OmitByType<T, U> = {
  [key in keyof T as T[key] extends U ? never : key]: T[key]
}

// 原理和mutable一样，只是逻辑相反
