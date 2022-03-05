type PercentageParser<A extends string> =
  A extends `${infer Prefix}${infer Num}${infer Subfix}`
    ? Prefix extends `${'+' | '-' | ''}`
      ? Num extends `${number | ''}`
        ? Subfix extends `${'%' | ''}`
          ? [Prefix, Num, Subfix]
          : PercentageParser<`${Num}${Subfix}`>
        : never
      : never
    : never
