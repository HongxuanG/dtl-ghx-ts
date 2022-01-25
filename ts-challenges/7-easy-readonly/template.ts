type MyReadonly<T> = {
  readonly [key in keyof T]: T[key]
}

// interface TODO{
//   a: string;
//   b: string;
//   c: string;
// }
// type r = keyof TODO
// const rv: r = 'a'

// js 的代码逻辑
// function myReadonly(Obj) {
//   const result = {}
//   for (const key in Obj) {
//     result['readonly'+key] = Obj[key]
//   }
//   return result
// }

// 返回一个对象
// 遍历传进来的obj      in --> mapped   keyof --> lookup
// 让每个Obj的property都加上readonly关键字
// 通过key获取Obj里面的值

// 所用知识
// 1.keyof关键字
// 2.readonly关键字
// 3.mapped 映射类型
// 4.indexed 索引类型