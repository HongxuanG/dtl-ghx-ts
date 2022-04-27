interface Action<T> {
  payload?: T;
  type: string;
}

interface ParamType {
  count: number;
  message: string;
  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;
  syncMethod<T, U>(action: T): Action<U>;
}


declare function connect(param: ParamType): Handle<ParamType>;

/**
* 
* 实现 Handle 类型定义，要求返回的类型为：
* type Result {
*  asyncMethod<T, U>(input: T): Action<U>;
*  syncMethod<T, U>(action: T): Action<U>;
* }
*/
// 我写的
type Await<P> = P extends Promise<infer S>
  ? S extends Promise<any>
  ? Await<S>
  : S
  : P
type Helper<T> = {
  [K in keyof T]: <T, U>(param: Await<T>) => Await<U>
}
type Handle<T> = Helper<Omit<T, 'count' | 'message'>>

// 光哥写的
// type HandleFunction<Func extends Function> = 
//     Func extends (param: Promise<unknown>, ...otherParams: unknown[]) => Promise<Action<unknown>>
//         ? <T, U>(param: T) => Action<U>
//         : Func;


// type Handle<Obj extends Record<string, any>> = {
//     [
//         Key in keyof Obj 
//             as Obj[Key] extends Function 
//                 ? Key
//                 : never
//     ]: HandleFunction<Obj[Key]>
// } 


type test21 = Handle<ParamType>
