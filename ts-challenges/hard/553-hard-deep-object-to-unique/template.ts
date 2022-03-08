type MyMerge<T> = {
  [P in keyof T]: T[P]
}
type DeepObjectToUniq<O extends object> = {
  [key in keyof O]: O[key] extends object 
    ? DeepObjectToUniq<MyMerge<O[key] & { 1122?: [O, key] }>>
    : O[key]
}

/**
 * 这题就是嵌套对象比较是否相等
 * 
 * 不知道为啥要这没写。。。。
 */