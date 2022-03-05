type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${ReplaceAll<Suffix, From, To>}`
  : S

// 解题过程
// 递归、infer、Condistional Type、Template Literal Types

// 虽然用的是递归，但也要注意不能递归"全部"结果字符串，而是递归后面的字符串
// 错误逻辑：type ReplaceAll<S extends string, From extends string, To extends string> = From extends '' ? S : S extends `${infer Prefix}${From}${infer Suffix}` ? ReplaceAll<`${Prefix}${To}${Suffix}`, From, To> : S
// 执行结果：
// Error：
// Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>, // 输出 fbarfbar
// Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>, // 输出 fobrfobar
