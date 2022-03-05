type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

// function myPick(todo, keys) {

//   let obj = {}
//   keys.forEach(key => {
//     if (key in todo) {
//       obj[key] = todo[key]
//     }
//   });
//   return obj
// }

// 1.返回一个对象
// 2.遍历第二个参数keys
// 3.取值 todo[key]
// 4.看看key在不在todo里面

// 所用知识点
// 遍历联合类型 mapped
// --https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 访问类型 indexed
// --https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
