type PickByType<T, U> = {
  [key in keyof T as T[key] extends U ? key : never]: T[key]
}

/**
 * 重映射 remapping
 * keyof
 * mapping type
 * 用 T[key] 等不等于 U 作为判断依据
 */