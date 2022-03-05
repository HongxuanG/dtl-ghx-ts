/**
 * 规律
 * N 是打包的size
 * 递归countArr +1
 * 递归到countArr == N时
 *  存贮中间结果ResultArr
 *  生成新的数组 重新传入Chunk
 *
 */
/**
 * 返回截取后剩下的元素组成的数组，会改变原数组
 * 从零开始
 */
type Splice<T extends unknown[], N extends number> = T extends [
  ...BuildArr<N>,
  ...infer Rest
]
  ? Rest
  : []
/**
 * 返回被截取的部分
 * 从零开始
 */
type Slice<T extends unknown[], N extends number> = T extends [
  ...infer Rest,
  ...BuildArr<Subtract<T['length'], N>>
]
  ? Rest
  : []

type Chunk<
  T extends any[] = [],
  N extends number = 1,
  countArr extends unknown[] = [],
  ResultArr extends unknown[] = []
> = T extends []
  ? ResultArr
  : countArr['length'] extends N
  ? Chunk<Splice<T, N>, N, [], [...ResultArr, Slice<T, N>]>
  : Chunk<T, N, [...countArr, unknown], ResultArr>

type aqq = Slice<[1, 2, 3], 4>

// 数组长度比给定的长，切割数组最后一个放入Splited
// 数组长度和给定长度相同，将数组放入Result 然后将切割的数组做新数组继续递归
// 数组无法再切割时，返回最终结果

// type Chunk<
//     Arr extends readonly unknown[],
//     Len extends number,
//     Splited extends readonly unknown[] = [],
//     Result extends unknown[] = []
// > = Arr["length"] extends Len
//     ? Chunk<Splited, Len, [], [...Result, Arr]>
//     : Arr extends [...infer NewArr, infer Ele]
//       ? Chunk<NewArr, Len, [Ele, ...Splited], Result>
//       : Splited extends []
//         ? Result
//         : [...Result, Splited];
