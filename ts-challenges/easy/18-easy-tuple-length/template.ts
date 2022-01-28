type Length<T extends readonly any[]> = T['length']

// 所学知识点
// 1. 什么是tuple
// --https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types
// 2. tuple和普通数组有什么区别
type StringNumberPair = [string, number] // tuple
type StringArr = string[] // 普通数组
type t3 = StringArr['length'] // number
type t2 = StringNumberPair['length'] // 2
// 3. as const 是readonly