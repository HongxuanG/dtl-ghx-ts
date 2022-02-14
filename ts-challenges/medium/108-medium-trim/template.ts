type MyTrimLeft<S extends string> = S extends `${' ' | '\t' | '\n'}${infer Rest}` ? TrimLeft<Rest> : S
type MyTrimRight<S extends string> = S extends `${infer Rest}${' ' | '\t' | '\n'}` ? TrimRight<Rest> : S
type Trim<S extends string> = MyTrimLeft<MyTrimRight<S>>