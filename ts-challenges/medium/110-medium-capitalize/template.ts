// Instruction: Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.
type MyCapitalize<S extends string> = S extends `${infer Char}`
// 关键：取得字符串你的第一个字母
// 所学知识：
// 1、