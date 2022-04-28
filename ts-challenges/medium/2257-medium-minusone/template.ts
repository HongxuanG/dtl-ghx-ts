/**
 * 我的想法：
 * 利用减法的数组长度计数实现逻辑 让 T 减一
 * 但是递归受限制了
 */

// type createArr<T extends number, Arr extends unknown[] = []> =
//   Arr['length'] extends T
//     ? Arr
//     : createArr<T, [unknown, ...Arr]>
// type Maxlimit = MinusOne<1100>       // 1000就提示实例化过深了 返回number

// type MinusOne<T extends number> = createArr<T> extends [arr1: unknown, ...arr2: infer Rest] ? Rest['length'] : never

type Make10Array<T extends any[]> = [
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
type Make1Array<
  T extends string,
  L extends any[] = []
> = `${L['length']}` extends T ? L : Make1Array<T, [1, ...L]>

type MakeArray<
  T extends string,
  L extends any[] = []
> = T extends `${infer F}${infer R}`
  ? MakeArray<R, [...Make10Array<L>, ...Make1Array<F>]>
  : L

// 9 + 90 = 99
// 9 + 990 = 999
// 9 + 9990 = 9999
type _9999Arr = MakeArray<'9999'>

type Pop1<T extends any[]> = T extends [...infer R, infer L] ? R : []

type MinusOne<T extends number> = Pop1<MakeArray<`${T}`>>['length']
