// 思路
// 1.将字符串转化为联合类型
type StringToUnion1<S extends string> = S extends `${infer L}${infer R}` ? L | StringToUnion1<R> : S;
// 2.联合类型两两合并
type Combination1<A extends string, B extends string> =
  | ''
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`;
// 3 etc.
type test1 = Combination1<'A' | 'B', 'C' | 'D'>
//4.联合类型的合并，利用联合类型默认可拆解
type UnionCombination<A extends string, B extends string = A> =
  A extends '' ? '' :
  A extends B
  ? Combination1<A, UnionCombination<Exclude<B, A>>>
  : never;
//5. 字符串合并
type AllCombinations<S extends string> = UnionCombination<StringToUnion1<S>>
