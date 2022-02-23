// Instruction：For given function type Fn, and any type A (any in this context means we don't restrict the type, 
// and I don't have in mind any type 😉) create a generic type which will take Fn as the first argument, A as the second, 
// and will produce function type G which will be the same as Fn but with appended argument A as a last one.

type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer P) => infer R ? (...args: [...P, A]) => R : never
type Case1 = AppendArgument<(a: number, b: string) => number, boolean>

// 没想到还能这么写：   (...args: [...P, A]) => R


// 我一开始想的是：  (...args: P, x: A]) => R
// 我关注于 x这个参数名 