/**
 *  减法
 */
type Subtract<A extends number, B extends number> = BuildArr<A> extends [
  ...BuildArr<B>,
  ...infer Rest
]
  ? Rest['length']
  : never
type example1 = Subtract<10, 5>

// 减法运算也是通过数组长度计算的
// 和加法不同的是 减法用解构赋值  infer推导出Rest，Rest填补了 BuildArr<A>数组 和 BuildArr<B>数组的差距
// 所以Rest就是减法的结果
