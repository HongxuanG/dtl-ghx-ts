// 取出必选的键值对
type GetRequired<T> = {
  [key in keyof T as T[key] extends Required<T>[key] ? key : never]: T[key]
}
/**
 * 如果是可选类型
 * 其值必定为union类型
 * T[key] extends Required<T>[key] ? key : never这句
 * 是分布式条件类型
 * T[key]会分布式的判断 和 Required<T>[key] 是否相等
 */
