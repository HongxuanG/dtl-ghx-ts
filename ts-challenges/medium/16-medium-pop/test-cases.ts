import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
  Expect<Equal<Shift<['a', 'b', 'c', 'd']>, ['b', 'c', 'd']>>,
  Expect<Equal<Unshift1<[3, 2, 1], [4]>, [4, 3, 2, 1]>>,
  Expect<
    Equal<Unshift1<['a', 'b', 'c', 'd'], ['e']>, ['e', 'a', 'b', 'c', 'd']>
  >,
  Expect<Equal<Push1<[3, 2, 1], [1]>, [3, 2, 1, 1]>>,
  Expect<Equal<Push1<['a', 'b', 'c', 'd'], ['e']>, ['a', 'b', 'c', 'd', 'e']>>
]
