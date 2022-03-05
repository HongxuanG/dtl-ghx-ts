// 删除属性
type MyOmit<T, K extends keyof T> = {
  [key in Exclude<keyof T, K>]: T[key]
}

// 所学知识点
// 1. 工具类型里面的 Exclude<UnionType, ExcludedMembers>
// --https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers
// 2. 结合easy-pick的解题思路
//  2.1 遍历联合类型 UnionType 用mapped type   in
//  2.2 keyof 操作符用于 遍历出所有对象的key属性
//  2.3 indexed type知识点 取出所有对象的value属性值  T[key]
