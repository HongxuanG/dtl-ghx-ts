type Format<T extends string> =
  T extends `${string}%${infer letter}${infer suffix}`
    ? letter extends 's'
      ? (x: string) => Format<suffix>
      : letter extends 'd'
        ? (x: number) => Format<suffix>
        : string
      : string
