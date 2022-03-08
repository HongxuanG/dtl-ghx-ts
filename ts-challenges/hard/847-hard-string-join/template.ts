type JoinedReturnType<Delimiter extends string, Array extends unknown[] = []> = 
  Array extends [infer First, ...infer Rest]
    ? Array['length'] extends 1
      ? `${First extends string ? First : ''}`
      : `${First extends string ? First : ''}${Delimiter}${JoinedReturnType<Delimiter, Rest>}`
    : ''
    
    
declare function join<T extends `${string}`>(delimiter: T): <R extends string[]>(...parts: R) => JoinedReturnType<T, R>
