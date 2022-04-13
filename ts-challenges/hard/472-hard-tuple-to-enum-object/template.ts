type ArrayAndReadonlyArrayByPassArray<T extends any[] | readonly any[] = any[]> = T | Readonly<T>
type IsReadonlyArray<T> = T extends any[] ? false : true

/**
 * 返回数组元素的索引值
 * @param T  数组
 * @param K 元素
 * @returns 索引值
 */
type Indexof<T extends ArrayAndReadonlyArrayByPassArray, K extends T[number], CountArr extends unknown[] = []> = 
  T[CountArr['length']] extends K
    ? CountArr['length']
    : Indexof<T, K, [...CountArr, unknown]>
    
type Enum<T extends ArrayAndReadonlyArrayByPassArray, N extends boolean = false> =
  IsReadonlyArray<T> extends true ? 
  {
    readonly [key in T[number] as Capitalize<key> ]: N extends true ? Indexof<T, key> : key
  } : {
    [key in T[number] as Capitalize<key> ]: N extends true ? Indexof<T, key> : key
  }