type ArrayToEUnion<T extends any[]> = T extends [] ? '' : `__${T[number]}`
type ArrayToMUnion<T extends any[]> = T extends [] ? '' : `--${T[number]}`
type an = ArrayToEUnion<[]>
type BEM<B extends string, E extends string[], M extends string[]> =
  ArrayToEUnion<E> extends string
    ? ArrayToMUnion<M> extends string
      ? `${B}${ArrayToEUnion<E>}${ArrayToMUnion<M>}`
      : never
    : never

type aan = BEM<'btn', ['price'], []>