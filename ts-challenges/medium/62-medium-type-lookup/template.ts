// 取出属性名是type对应的 Type
type anyInferfaceWithType<T> = { type: T, [property: string]: any }
type LookUp<U extends anyInferfaceWithType<U['type']>, T extends U['type']> = U extends anyInferfaceWithType<T> ? U : never