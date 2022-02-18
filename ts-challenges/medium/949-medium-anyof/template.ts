type AnyOf<T extends readonly any[]> =
  T['length'] extends 0
  ? false : T extends [infer A, ...infer B]
  ? A extends {} | '' | 0 | false | [] ? false : AnyOf<B> : true;
  
type test2 = AnyOf<[0, '', false, [], {name: 'test'}]>