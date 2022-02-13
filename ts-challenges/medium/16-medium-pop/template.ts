type Pop<T extends any[]> = T extends [...infer Result, infer last] ? Result : never
type Shift<T extends any[]> = T extends [infer Other, ...infer Result] ? Result : never
type Unshift1<T extends any[], U> = U extends any[] ? [...U, ...T] : never
type Push1<T extends any[], U> = U extends any[] ? [...T, ...U] : never