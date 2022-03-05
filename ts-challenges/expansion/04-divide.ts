/**
 *  除法
 *  就是 减法的递归
 *  B 是 每次 减B
 *  直到A 被减为0 减了 ResultArr 次
 *  每次做减法   ResultArr +1
 */
type Divide<
  A extends number,
  B extends number,
  ResultArr extends unknown[] = []
> = A extends 0
  ? ResultArr['length']
  : Divide<Subtract<A, B>, B, [unknown, ...ResultArr]>

type example3 = Divide<60, 5> // 12
