/**
 * 大于
 * 在参数上需要创建一个CountArr用于计数
 * T extends U                  ==>  T 等于 U ==> false
 * CountArr['length'] extends T ==> 长度先等于T  T 小于 U ==> false
 * CountArr['length'] extends U ==> 长度先等于U  U 小于 T ==> true
 * 都不满足  CountArr['length'] +1
 * */
type GreaterThan<
  T extends number,
  U extends number,
  CountArr extends unknown[] = []
> = T extends U
  ? false
  : CountArr['length'] extends T
  ? false
  : CountArr['length'] extends U
  ? true
  : GreaterThan<T, U, [...CountArr, unknown]>
