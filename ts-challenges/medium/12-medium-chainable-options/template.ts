// 
type Chainable<T extends Record<any, any> = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & Record<K, V>>
  get(): T
}