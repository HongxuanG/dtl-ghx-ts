type MyTupleToUnion<T extends unknown[] = []> = T[number]

type UnionToIntersection1<U> =
  (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

type LastOf<T> =
  UnionToIntersection1<T extends any ? () => T : never> extends () => (infer R) ? R : never

// TS4.0+
type MyPush<T extends any[], V> = [...T, V];

// Tuple 转 Union
type TuplifyUnion<T, L = LastOf<T>, N = [T] extends [never] ? true : false> =
  true extends N ? [] : MyPush<TuplifyUnion<Exclude<T, L>>, L>

/**
 * 先各自转成Union然后Exclude 
 * 再转回Tuple
 */
type Without<T extends unknown[], U> =
  U extends unknown[]
  ? TuplifyUnion<Exclude<MyTupleToUnion<T>, MyTupleToUnion<U>>>
  : Without<T, [U]>

