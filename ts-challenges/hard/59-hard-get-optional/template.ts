// 取出可选类型的键值对
type GetOptional<T> = {
  [key in keyof T as {} extends Pick<T, key> ? key : never]: T[key]
}

/**
 * 这里用到的性质就是 可选类型是 undefined和值类型的联合类型
 * Pick是找出传入的key值 所匹配的键值对
 * {} extends Pick<T, key> 可以判断，如果是可选类型，那么键值对就有可能为空
 */