// 判断是否Never
type IsNever<T> = [T] extends [never] ? true : false
// 具体为什么要加上[]  请参考
// [官方文档](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)