// 不会做的一题   没有理解 不知道分布式条件类型的性质
type IsUnion<T, U = T> = T extends T ? [U] extends [T] ? false : true : never;

