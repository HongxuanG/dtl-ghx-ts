// 大于或大于等于
type EqualOrGreaterThan1<
  T extends number,
  U extends number,
  UseEqual extends boolean = false
  > = EqualGreaterThanHelper<T, U, UseEqual>

type EqualGreaterThanHelper<
  T extends number,
  U extends number,
  UseEqual extends boolean,
  CountArr extends unknown[] = []> =
  T extends U
  ? UseEqual
  : CountArr['length'] extends T
  ? false
  : CountArr['length'] extends U
  ? true
  : EqualGreaterThanHelper<T, U, UseEqual, [...CountArr, unknown]>

// 小于或小于等于
type EqualOrLessthan<
  T extends number,
  U extends number,
  UseEqual extends boolean = false
  > = EqualLessthanHelper<T, U, UseEqual>

type EqualLessthanHelper<
  T extends number,
  U extends number,
  UseEqual extends boolean,
  CountArr extends unknown[] = []> =
  T extends U
  ? UseEqual
  : CountArr['length'] extends T
  ? true
  : CountArr['length'] extends U
  ? false
  : EqualLessthanHelper<T, U, UseEqual, [...CountArr, unknown]>

type RangeHelper<
  L extends number,
  H extends number,
  Result extends number[] = [],
  CountArr extends unknown[] = []> =
  EqualOrGreaterThan1<CountArr['length'], L, true> extends true
  ? EqualOrLessthan<CountArr['length'], H, true> extends true
  ? RangeHelper<L, H, [...Result, CountArr['length']], [...CountArr, unknown]>
  : Result[number]
  : RangeHelper<L, H, Result, [...CountArr, unknown]>

  // 求数值范围
type NumberRange<L extends number, H extends number> = RangeHelper<L, H>
