type TupleToNestedObject<T, U> = T extends [] ? U : {
  [key in T[0]]: 
}