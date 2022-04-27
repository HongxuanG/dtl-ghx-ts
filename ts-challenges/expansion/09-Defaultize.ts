// 实现这样一个高级类型，对 A、B 两个索引类型做合并，如果是只有 A 中有的不变，如果是 A、B 都有的就变为可选，只有 B 中有的也变为可选。
type A = {
  aaa: 111,
  bbb: 222
}
type B = {
  bbb: 222,
  ccc: 333
}
type Result = {
  aaa: 111,
  bbb?: 222 | undefined,
  ccc?: 333 | undefined
}
// Partial 可以把键值对变为可选
// Extract 获取两个union类型的交叉集合
// Copyy   拷贝一个对象类型
// Exclude 获取除指定的T以外的union类型
// Pick    摘取除指定key以外的对象类型
type Defaultize<A, B> = Copyy<Pick<A, Exclude<keyof A, keyof B>>
  & Partial<Pick<A, Extract<keyof A, keyof B>>>
  & Partial<Pick<B, Exclude<keyof B, keyof A>>>>
 
// DefaultizeRes will equal to Result
type DefaultizeRes = Defaultize<A, B>
