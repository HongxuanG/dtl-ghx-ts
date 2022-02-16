// 


type AppendToObject<T, U extends string, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}


// 总结：
// 没想到 K in keyof T | U  还能使用联合类型结合extends 判断属性值

// 一开始想的是：
//  = T & {
//     [k in Key]: Val
//   }