declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{ [key in keyof T]: T[key] extends Promise<infer P> ? P : T[key] }>

// 疑问？
// Promise<{ [key in keyof T]: T[key] extends Promise<infer P> ? P : T[key]}>
// { [key in keyof T]: T[key] }不应该是一个对象吗 怎么返回的是一个数组呢？

// type ss<T> = { [key in keyof T]: T[key] }
// let test: ss<{ a: 1, c: 1, b: 1, }> = {
//   a: 1,
//   c: 1,
//   b: 1
// } //编译通过了！

// type ss<T> = { [key in keyof T]: T[key] }
// let test: ss<[1, 2, 3]> = [1, 2, 3] // 编译通过了！

/*********** */
// 唯一的解释是数组也是对象？

// type ss<T extends any[]> = T  // 两种写法 效果不是一样的吗？
// type ss<T> = { [key in keyof T]: T[key] }
type ss<T> = { [key in keyof T]: T[key] }
let test: ss<[1, 2, 3]> = [1, 2, 3]
