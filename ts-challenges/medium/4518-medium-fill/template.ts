// 创建数组
type CreateArr<
  N extends number,
  Ele extends unknown = unknown,
  ResultArr extends unknown[] = []
> = ResultArr['length'] extends N
  ? ResultArr
  : CreateArr<N, Ele, [...ResultArr, Ele]>

/**
 * 返回被截取的部分
 * 从start 到 End
 */
type MySlice<
  T extends unknown[],
  Start extends number = 0,
  End extends number = T['length']
> = T extends [
  ...CreateArr<Start>,
  ...infer Rest,
  ...CreateArr<Subtract<T['length'], End>>
]
  ? Rest
  : []

/**
 * 数组的fill方法
 */
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length']
> = GreaterThan<Start, T['length']> extends true
  ? T
  : GreaterThan<End, T['length']> extends true
  ? CreateArr<T['length'], N>
  : [
      ...MySlice<T, 0, Start>,
      ...CreateArr<Subtract<End, Start>, N>,
      ...MySlice<T, End, T['length']>
    ]
