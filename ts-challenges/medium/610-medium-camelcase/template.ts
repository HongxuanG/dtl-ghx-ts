type Char =
  | 'a'
  | 'b'
  | 'c'
  | 'd'
  | 'e'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'm'
  | 'n'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 's'
  | 't'
  | 'u'
  | 'v'
  | 'w'
  | 'x'
  | 'y'
  | 'z'
// 拼接字符串
type Append<T extends string, U extends string> = `${T}${U}`
// 驼峰命名法
type CamelCase<S extends string> =
  S extends `${infer Prefix}${'-'}${infer A}${infer Suffix}`
    ? A extends Char
      ? `${Prefix}${Uppercase<A>}${CamelCase<Suffix>}`
      : `${Prefix}${'-'}${CamelCase<Append<A, Suffix>>}`
    : S
// 对拼接字符串这一步的讲解：
// 如果 '-'后一个字符 不是小写字母   例如：'--b'   '-'没用    '-b'才有用
// 则带上 '--' 的第二个 '-' 和 'b' 一起拼接起来 ，作为参数继续传入CamelCase 这样递归下去
type test = CamelCase<'foo--bar----baz'>
