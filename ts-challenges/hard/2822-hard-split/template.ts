// 
type Split<S extends string, SEP extends string, ResultArr extends unknown[] = []> = 
  string extends S
    ? S[]
    : S extends `${infer First}${SEP}${infer Second}`
      ? Split<Second, SEP, [...ResultArr, First]>
      : S extends ''
        ? SEP extends ''
          ? ResultArr
          : [S]
        : [...ResultArr, S]

/**
 * S extends `${infer First}${SEP}${infer Second}`
 * 这一句如果写成了  S extends `${infer First}${infer Center}${infer Second}`
 * 那么First就不能匹配到一个字符串而已只有一个字符
 * SEP 必须是一个确定的字符才能整串匹配左边的
 */