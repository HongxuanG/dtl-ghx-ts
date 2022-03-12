/**
 * 添加键值对到obj
 * 逻辑：
 * if K 在 T 里面存在 && V === T[K]
 *  不做改变
 * else if K 在 T 里面存在
 *  [ T[K], V ]   放到一个数组里面
 * else 
 *  添加键值对 K 和 V 到obj里面
 */
type AddKeyAndValueToObj<T extends Record<string, any>, K extends string, V> = {
  [Key in keyof T | K]:
    Key extends keyof T
      ? Key extends K 
        ? equal<V, T[Key]> extends true
          ? T[Key]
          : [T[Key], V]
        : T[Key]
      : V
}
/**
 * 思路
 * & 用于相隔两个键值对
 * 只有键没有值，则值为true
 * 相同键相同值，则看做一个键值对
 * 相同键不同值，则值为数组，里面包含不同的值
 */
type ParseQueryString<S extends string, ResultObj extends Record<string, any> = {}> =
  S extends ''
    ? ResultObj
    : S extends `${infer First}&${infer Rest}`
        ? First extends `${infer Key}=${infer Value}`
          ? ParseQueryString<Rest, AddKeyAndValueToObj<ResultObj, Key, Value>>
          : First extends `${infer SingleKey}`
            ? ParseQueryString<Rest, AddKeyAndValueToObj<ResultObj, SingleKey, true>>
            : ParseQueryString<Rest, ResultObj>
        : S extends `${infer K}=${infer V}`
          ? AddKeyAndValueToObj<ResultObj, K, V>
          : AddKeyAndValueToObj<ResultObj, S, true>


