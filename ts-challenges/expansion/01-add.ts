/**
 *  加法
 */
type BuildArr<
  Length extends number,
  Ele extends unknown = unknown,
  Arr extends unknown[] = []
> = Arr['length'] extends Length ? Arr : BuildArr<Length, Ele, [...Arr, Ele]>
// 数组长度做计数 通过两个数组合并成一个数组然后length取数字 type Arrlength<arr> = arr['length']
type Add<A extends number, B extends number> = [
  ...BuildArr<A>,
  ...BuildArr<B>
]['length']

type example = Add<15, 30>
