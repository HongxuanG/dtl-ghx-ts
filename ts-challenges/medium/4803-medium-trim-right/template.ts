type TrimRight<S extends string> = S extends `${infer Rest}${' ' | '\t' | '\n'}`
  ? TrimRight<Rest>
  : S

// 原理和 TrimLeft 一样
