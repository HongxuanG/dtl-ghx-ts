// type ArrayToEUnion<T extends any[]> = T extends [] ? '' : `__${T[number]}`
// type ArrayToMUnion<T extends any[]> = T extends [] ? '' : `--${T[number]}`
// type an = ArrayToEUnion<[]>
// type BEM<B extends string, E extends string[], M extends string[]> =
//   ArrayToEUnion<E> extends string
//     ? ArrayToMUnion<M> extends string
//       ? `${B}${ArrayToEUnion<E>}${ArrayToMUnion<M>}`
//       : never
//     : never

// 优化
type ArrayToUnion<T extends any[], Separator extends string = ''> = T extends []
  ? ''
  : `${Separator}${T[number]}`
type tse = ArrayToUnion<[]>
type BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = `${B}${ArrayToUnion<E, '__'>}${ArrayToUnion<M, '--'>}`

// 理解了union的分布式条件类型就很容易解开
// extends 左边如果是union 会把union拆开，一个一个传入单个元素进行判断
