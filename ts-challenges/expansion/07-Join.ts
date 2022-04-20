// 这次我们通过柯里化实现一个join
// const res = join('-')('guang', 'dong', 'and')
// 要给上面的join加类型约束
declare function joinWithCurrying<Delimiter extends string>(delimiter: string): <Items extends string[]>(...args: Items) => JoinType<Items, Delimiter>
type JoinType<Items extends unknown[], Delimiter extends string> = JoinTypeHelper<Items, Delimiter>
type JoinTypeHelper<Items extends unknown[], Delimiter extends string, Result extends string = ''> = 
  Items extends [infer Cur, ...infer Rest] 
  // 这里开头会多一个Dellimiter
    ? JoinTypeHelper<Rest, Delimiter, `${Result}${Delimiter}${Cur & string}`>
    : RemoveFirstDelimiter<Result, Delimiter>
// 移除第一个Delimiter
type RemoveFirstDelimiter<S extends string, Delimiter extends string> = 
  S extends `${infer F}${infer R}`
  ? F extends Delimiter
    ? R
    : S
  : S


const res = join('-')('guang', 'dong', 'and')
