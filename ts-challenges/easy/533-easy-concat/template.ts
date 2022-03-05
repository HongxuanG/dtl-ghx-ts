// 第一种解法
// type Concat<T extends Array<any>, U extends Array<any>> = T extends [...infer FirstRest] ? U extends [...infer SecondRest] ? [...FirstRest, ...SecondRest] : never : never

// 第二种解法
type Concat<T extends Array<any>, U extends Array<any>> = [...T, ...U]

function myconcat(array1: any[], array2: any[]): number[] {
  return [...array1, ...array2]
}

// 所学知识
// 1. infer 待推断
// 2. 元组类型解构
