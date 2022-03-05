type HardCamelCase<S extends string> =
  S extends `${infer first}_${infer second}${infer third}`
    ? `${Lowercase<first>}${Capitalize<second>}${HardCamelCase<third>}`
    : `${Lowercase<S>}`
type result = HardCamelCase<'foo_bar_hello_world'>
