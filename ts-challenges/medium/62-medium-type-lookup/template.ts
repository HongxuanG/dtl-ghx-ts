// 取出属性名是type对应的 Type
type anyInferfaceWithType<T> = { type: T, [property: string]: any }
type LookUp<U extends anyInferfaceWithType<U['type']>, T extends U['type']> = U extends anyInferfaceWithType<T> ? U : never

// 所学知识
// 返回的是union的其中一个 Cat or Dog
// 所以LookUp类型的返回值应该是 U
// T 应该被约束为 U里面的type属性值内容
// 1、