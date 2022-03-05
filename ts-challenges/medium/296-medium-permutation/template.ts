// Instruction： Implement permutation type that transforms union types into the array that includes permutations of unions.
// type Permutation<T extends string> = [T] extends [never] ? [] : [T]
// type sss = Permutation<'A' | 'B' | 'C'>

// 这题不会做、、、

// 分布式 确定 第一个元素，再把第一个元素除去，递归确定剩余元素

type Permutation<T, P = T> = [T] extends [never]
  ? []
  : T extends any
  ? [T, ...Permutation<Exclude<P, T>>]
  : never
