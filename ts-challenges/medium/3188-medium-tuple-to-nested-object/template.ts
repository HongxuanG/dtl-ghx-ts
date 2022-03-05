type TupleToNestedObject<
  T extends unknown[],
  U,
  CountArr extends unknown[] = []
> = T[CountArr['length']] extends string
  ? {
      [key in T[CountArr['length']]]: [
        ...CountArr,
        unknown
      ]['length'] extends T['length']
        ? U
        : TupleToNestedObject<T, U, [...CountArr, unknown]>
    }
  : U
