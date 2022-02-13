type Push<T extends any[], U> = T extends [...infer Rest] ? [...Rest, U] : never

// type Push<T extends readonly any[], U> = [...T, U]

// const aa: readonly number[] = [1, 2, 3, 4, 58]
// const aa = [1, 2, 3, 4, 58] as const
// aa.push(1)