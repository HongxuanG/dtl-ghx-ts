type Copyy<T> = { [key in keyof T]: T[key] }
type RequiredByKeys<T extends Record<string, any>, K extends any = keyof T> = Copyy<{
  [key in keyof Pick<T, keyof T & K>]-?: T[key]
} & {
    [key in keyof T as key extends K ? never : key]?: T[key]
  }>

// 所学知识：
// 1、重映射 remapping         as 操作符
// 2、& 的另一层含义   union 之间的 交叉类型约束  



// type Copy<T> = { [K in keyof T]: T[K] }
// type RequiredByKeys<T extends object, K extends keyof any = keyof T> = Copy<
//   Required<Pick<T, keyof T & K>>
//   & { [key in Exclude<keyof T, K>]?: T[key] }
// >

// & 的约束
type a1 = 'key' | 'name'
type a2 = 'value' | 'name'
type res = a1 & a2

// type的拓展
type a11 = {
  name: '11'
}
type a22 = {
  age: '9'
}
type res1 = a11 & a22
type res2 = res1['name']   // '11'
type res3 = res1['age']    // '9'