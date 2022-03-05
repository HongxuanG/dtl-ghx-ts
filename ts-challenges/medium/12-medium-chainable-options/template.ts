type Chainable<T extends { [key in keyof T]: T[key] } = {}> = {
  option<K extends Omit<T, keyof T> & string, V>(
    key: Exclude<K, keyof T>,
    value: V
  ): Chainable<T & Record<K, V>>
  get(): Omit<T, 'option' | 'get'>
}
declare const a: Chainable

const result1 = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

console.log(result1)

// key: Exclude<K, keyof T 用于排除 @ts-expect-error的问题
// Omit 构造一个具有T属性的类型，除了K类型中的属性。
// Exclude 从T中排除那些可赋给U的类型。
