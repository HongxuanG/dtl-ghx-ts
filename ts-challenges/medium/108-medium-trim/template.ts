type MyTrimRight<S extends string> = S extends `${infer Rest}${
  | ' '
  | '\t'
  | '\n'}`
  ? TrimRight<Rest>
  : S
type MyTrimLeft<S extends string> = S extends `${
  | ' '
  | '\t'
  | '\n'}${infer Rest}`
  ? TrimLeft<Rest>
  : S

type Trim<S extends string> = MyTrimLeft<MyTrimRight<S>>
// 只不过叠在一起使用而已
