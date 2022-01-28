type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [value in T[number]]: value
}
// function TupleToObject1(arr) {
//   let res = {}
//   arr.forEach(item => {
//     res[item] = item
//   });
//   return res
// }


// 返回一个对象
// 遍历数组   value in T[number]: value