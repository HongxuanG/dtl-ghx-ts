type ReplaceKeys<
  U extends Record<string, any>,
  T,
  Y extends Record<string, any>
> = U extends U
  ? {
      [key in keyof U]: key extends T
        ? key extends keyof Y
          ? Y[key]
          : never
        : U[key]
    }
  : never
/**
 * 这个用了分布式条件类型 distributive conditional type
 * 输出的仍然是联合类型
 * 判断 U 的属性名 key 是否 extends T 这个联合类型
 *  是：继续判断 key 是否 extends Y 的属性名
 *    是：输出 key对应 Y 的key 的属性值
 *    否：输出 never
 *  否：输出 U 原来的属性值 不做 replace
 */
