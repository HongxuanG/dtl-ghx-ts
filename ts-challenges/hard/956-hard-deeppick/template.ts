type MyUnionToIntersection<U> = 
  (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown ? R : never

type DeepPickRes<O extends Record<string, any>, Target extends string> =
  Target extends `${infer F}.${infer S}`
  ? {
    [P in F]: DeepPickRes<O[P], S>
  }
  : Target extends keyof O
    ? {
      [K in keyof O as K extends Target ? K : never]: O[K]
    } : unknown

type DeepPick<O extends object, Target extends string> = MyUnionToIntersection<DeepPickRes<O, Target>>
  
