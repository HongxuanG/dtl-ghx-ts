// type LengthOfString2<S extends string , R extends number[] = []> =
//   S extends `${infer R1}${infer R2}${infer R3}${infer R4}${infer R5}${infer R6}${infer R7}${infer R8}${infer R9}${infer R10}${infer Rest}`
//     ? LengthOfString2<Rest, [...R, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]>
//     : S extends `${infer _}${infer Rest}`
//       ? LengthOfString2<Rest, [...R, 1]>
//       : R["length"];
    
// 不知道为啥这么写。。。

// 我懂了这个本质上就是减少递归的次数
// ts是有最大递归次数限制的
/**
 * R的长度就是最后的结果
 * 如果string的length在10的范围以内，一个一个的增加 R 的长度
 * 如果strign的length在10的范围以外，10个10个的增加 R 的长度
 * 算是一种优化吧
 */


type LengthOfString2<S extends string, R extends unknown[] = []> = 
  S extends `${string}${string}${string}${string}${string}${string}${string}${string}${string}${string}${infer Rest}`
    ? LengthOfString2<Rest, [...R, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]>
    : S extends `${string}${infer Rest}`
      ? LengthOfString2<Rest, [...R, unknown]>
      : R['length']