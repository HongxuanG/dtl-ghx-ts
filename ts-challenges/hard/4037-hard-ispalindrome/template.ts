type StringToTuple<T extends string | number, ResultArr extends unknown[] = []> =
  `${T}` extends `${infer First}${infer Rest}`
    ? StringToTuple<Rest, [...ResultArr, First]>
    : ResultArr
// 回文串
type IsPalindrome<T extends string | number, StringArray extends unknown[] = StringToTuple<T>> =
  StringArray['length'] extends 1
  ? true
  : StringArray extends [infer Prefix, ...infer Center, infer Suffix]
    ? Prefix extends Suffix
      ? Center['length'] extends 0 | 1
        ? true
        : IsPalindrome<T, Center>
      : false
    : false

/**
 * 关键在于模式匹配 StringArray extends [infer Prefix, ...infer Center, infer Suffix]
 */
