type BinaryToDecimal<S extends string, ResultCount extends unknown[] = []> =
  S extends `${infer First}${infer Rest}`
  ? First extends '0'
    ? BinaryToDecimal<Rest, [...ResultCount, ...ResultCount]>
    : BinaryToDecimal<Rest, [...ResultCount, ...ResultCount, 1]>
  : ResultCount['length']

// 这想不出来。。。
