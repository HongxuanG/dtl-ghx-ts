type NumberStr = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
// 我写的
type Absolute<T extends number | string | bigint> =
  `${T}` extends `${infer A}${infer B}`
    ? A extends NumberStr
      ? `${A}${Absolute<B>}`
      : Absolute<B>
    : ''
// 别人写的
// type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer K}` ? K : `${T}`

// 递归
// 1、`${T}` 把 T 转成string
// 2、拆分`${T}` 为 `${infer A}${infer B}`
// 3、定义一个number集合用于判断是否 string number
// 4、符合条件则  拼接字符串  剩余的 B继续调用 Absolute
