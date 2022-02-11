type Last<T extends any[]> = T extends [...infer Rest, infer P] ? P : never

// 借助了数组解构的思路
// let [first, ...aa] = [1,2,3,4,5,6,7]