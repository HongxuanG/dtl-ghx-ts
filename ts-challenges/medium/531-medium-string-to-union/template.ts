// Instruction: Implement the String to Union type. Type take string argument. The output should be a union of input letters
type StringToUnion<T extends string> = T extends '' ? never : T extends `${infer A}${infer B}` ? A | StringToUnion<B> : never
// extends 里面也可以返回 联合类型
