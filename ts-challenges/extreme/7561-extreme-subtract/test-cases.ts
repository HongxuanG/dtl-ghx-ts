import { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ExtremeSubtract<1, 1>, 0>>,
  Expect<Equal<ExtremeSubtract<2, 1>, 1>>,
  Expect<Equal<ExtremeSubtract<1, 2>, never>>,
  // @ts-expect-error
  Expect<Equal<ExtremeSubtract<1000, 999>, 1>>
]
