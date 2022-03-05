type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<
  S extends string,
  ResultArr extends string[] = []
> = S extends `${string}%${infer Letter}${infer Rest}`
  ? Letter extends keyof ControlsMap
    ? ParsePrintFormat<Rest, [...ResultArr, ControlsMap[Letter]]>
    : ParsePrintFormat<Rest, ResultArr>
  : ResultArr
