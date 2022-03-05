type isEqual<A, B> = (A extends B ? true : false) & (B extends A ? true : false)
type DropChar<S extends string, C> = S extends `${infer First}${infer Other}`
  ? isEqual<First, C> extends true
    ? DropChar<Other, C>
    : `${First}${DropChar<Other, C>}`
  : S

/**
 * 终止条件： S 的每个char都被isEqual判断完
 * isEqual 是判断两个东西是否相等
 */
