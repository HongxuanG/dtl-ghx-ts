type Trunc<S extends string | number> =
  `${S}` extends `${infer Prefix}.${string}` ? Prefix : `${S}`
