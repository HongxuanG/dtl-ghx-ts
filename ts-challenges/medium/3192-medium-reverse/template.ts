type Reverse<T> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : T
