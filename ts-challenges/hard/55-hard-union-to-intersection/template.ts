type UnionToIntersection<U> = (U extends U ? (arg: U) => any : never) extends (
  arg: infer R
) => any
  ? R
  : never

/**
 * 函数的参数具有逆变性质
 * 联合类型是大的类型
 * 交叉类型是小的类型
 * 大转小 逆变
 * 小转大 协变
 *
 */
