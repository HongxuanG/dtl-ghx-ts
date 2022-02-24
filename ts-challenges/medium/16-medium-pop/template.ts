type Pop<T extends unknown[]> = T extends [...infer Result, unknown] ? Result : never
type Shift1<T extends unknown[]> = T extends [unknown, ...infer Result] ? Result : never
type Unshift1<T extends unknown[], U> = U extends unknown[] ? [...U, ...T] : never
type Push1<T extends unknown[], U> = U extends unknown[] ? [...T, ...U] : never