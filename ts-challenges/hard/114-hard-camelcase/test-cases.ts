import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<HardCamelCase<'foobar'>, 'foobar'>>,
  Expect<Equal<HardCamelCase<'FOOBAR'>, 'foobar'>>,
  Expect<Equal<HardCamelCase<'foo_bar'>, 'fooBar'>>,
  Expect<Equal<HardCamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
  Expect<Equal<HardCamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
  Expect<Equal<HardCamelCase<''>, ''>>
]
