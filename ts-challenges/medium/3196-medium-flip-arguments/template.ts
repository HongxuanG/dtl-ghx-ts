// infer提取参数列表，再倒序一下参数列表就完了
type FlipArguments<T extends Function> = T extends (...args: infer Args) => infer ReturnType ? (...args: Reverse<Args>) => ReturnType : never

