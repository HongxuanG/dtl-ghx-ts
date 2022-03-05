type ObjectEntriesHandler<
  T extends Record<string, any>,
  K extends keyof T = keyof T
> = K extends K ? [K, T[K]] : never
type ObjectEntries<T extends Record<string, any>> = ObjectEntriesHandler<
  Required<T>
>

/**
 * Partial会把值添加一个undefined转成联合类型，如：name: string | undefined 这不是我们想要的
 * 先把T转成必选类型，这样就避免了Partial带来的undefined
 * 泛型参数上面追加一个参数 K，用于获取keyof T
 * K extends K 利用了 distributive conditional type 分布式条件判断
 * [官网](https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types)
 * K 一个一个的传入 extends 进行判断
 */
