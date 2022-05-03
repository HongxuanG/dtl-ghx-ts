// 1. 通过union的分布式条件类型性质拿到所有可能的数组排列顺序
// 2. 取前两个元素组成一个数组union
// 3. 创建一个createArr，用来生成数组，用数组的length做计数
// 4. 创建一个Add，通过数组的计数算出两个number的和
// 5. 通过分布式条件类型性质，传入每个数组union并计算他们的和，如果等于target，那么返回true，否则为never
// 6. 如果union所有的成员都没有一个是true，那么TwoSum结果为false


type Permutation1<T> = 
  T extends [infer One, ...infer Rest] 
    ? [One, ...Permutation1<Rest>] | [...Permutation1<Rest>, One]
    : []

type GetFirstTwo<T> = 
  T extends [infer One, infer Two, ...infer Rest]
    ? [One, Two]
    : []

type GetAllPossibles<T> = GetFirstTwo<Permutation1<T>>

type createArray<N, CountArr extends unknown[] = []> = 
  CountArr['length'] extends N 
    ? CountArr
    : createArray<N, [...CountArr, unknown]>

type AddTwoNumber<N1 extends number, N2 extends number> = 
  [...createArray<N1>, ...createArray<N2>]['length']


type TwoSumHandler<T extends number[], U extends number, R = GetAllPossibles<T>> = 
  R extends R
    ? R extends [infer One, infer Two]
      ? AddTwoNumber<One & number, Two & number> extends U
        ? true
        : never
      : never
    : never

type TwoSum<T extends number[], U extends number> = 
  [TwoSumHandler<T, U>] extends [never] ? false : true
