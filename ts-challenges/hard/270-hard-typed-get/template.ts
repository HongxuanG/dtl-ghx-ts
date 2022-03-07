type Get<T extends Record<string, any>, K extends string> =
  K extends `${infer First}.${infer Rest}`
  ? First extends keyof T
    ? Get<T[First], Rest>
    : never
  :T[K]

/**
 * 递归、 Template Literal Types 、keyof 、 infer提取
 */