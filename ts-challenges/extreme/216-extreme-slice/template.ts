
type Create10Array<T extends unknown[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
]
type Create1Array<
  T extends string,
  L extends unknown[] = []
> = `${L['length']}` extends T ? L : Create1Array<T, [1, ...L]>

type CreateArray<
  T extends string,
  L extends unknown[] = []
> = T extends `${infer F}${infer R}`
  ? CreateArray<R, [...Create10Array<L>, ...Create1Array<F>]>
  : L

/**
 * 减一
 */
type SubN<A extends number, B extends number> = CreateArray<`${A}`> extends [...infer Rest, ...CreateArray<`${B}`>] ? Rest['length'] : never
type AddOne<N extends number> = [...CreateArray<`${N}`>, unknown]['length']


type StringToNumber<S extends string, CountArr extends unknown[] = []> =
  S extends `${CountArr['length']}`
  ? CountArr['length']
  : StringToNumber<S, [...CountArr, unknown]>

type Make

type Slice<
  Arr extends unknown[],
  Start extends number = 0,
  End extends number = Arr['length'],
  ResultArr extends unknown[] = []> = 
  equal<End, Start> extends true
    ? ResultArr
    : `${Start}` extends `-${infer PositiveStart}`
      ? `${End}` extends `-${infer PositiveEnd}`
        ? Slice<Arr, AddOne<SubN<Arr['length'], StringToNumber<PositiveStart>>>, SubN<Arr['length'], StringToNumber<PositiveEnd>>, [...ResultArr, Arr[Start]]>
        : Slice<Arr, AddOne<SubN<Arr['length'], StringToNumber<PositiveStart>>>, End, [...ResultArr, Arr[Start]]>
      : Slice<Arr, AddOne<Start>, End, [...ResultArr, Arr[Start]]>
  

  type Arr = [1, 2, 3, 4, 5]
  type test5 = Slice<Arr, 0, -1>
