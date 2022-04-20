// 函数重载1
declare function func(name: string): string
declare function func(name: number): number
type res111 = ReturnType<typeof func>
// 函数重载2
interface Func {
  (name: string): string;
  (name: number): number;
}
type res222 = ReturnType<Func>
// 函数重载3
type Func2 = ((name: string) => string) & ((name: number) => number)
type res333 = ReturnType<Func2>
// 逆变
type RUnionToIntersection<U> =
  (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown
  ? R
  : never
// union转成交叉类型的函数形式，每个函数的返回值是union的每一个元素
type RUnionToFuncIntersection<T> = RUnionToIntersection<T extends any ? () => T : never>
// union转成交叉类型的函数形式，每个函数的返回值是union的每一个元素
type RUnionToFuncIntersectionRes = RUnionToFuncIntersection<'dong' | 'guang'>
// 利用 ReturnType 可以取到交叉类型函数的最后一个返回值的类型
type ReturnTypeRes = ReturnType<RUnionToFuncIntersectionRes>
// 联合转元组
// 思路：
// 1. union转成交叉类型  这里面用到了逆变 union触发分布式条件
// 2. union转成交叉类型的函数形式，每个函数的返回值是union的每一个元素
// 3. 利用ReturnType可以取到交叉类型函数的最后一个返回值的类型
// 4. 通过递归和Exclude取出剩余的union元素，然后把它们放到数组里面
type UnionToTuple<T> = RUnionToIntersection<T extends any ? () => T : never> extends () => infer ReturnType
  ? [...UnionToTuple<Exclude<T, ReturnType>>, ReturnType]
  : []
// 结果：
type UnionToTupleRes = UnionToTuple<1|2|3|4>
