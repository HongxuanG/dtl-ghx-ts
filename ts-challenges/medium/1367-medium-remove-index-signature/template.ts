type RemoveIndexSignature<T> = {
  [key in keyof T as key extends `${infer S}` ? key : never]: T[key]
}

type Foo = {
  [key: string]: any
  foo(): void
}

type aaa = RemoveIndexSignature<Foo>
