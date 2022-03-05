type Join<T extends unknown[], U extends string | number> = T extends [
  infer First,
  ...infer Rest
]
  ? `${First extends string | number | bigint | boolean | null | undefined
      ? First
      : ''}${Rest extends [] ? '' : `${U}${Join<Rest, U>}`}`
  : ''
