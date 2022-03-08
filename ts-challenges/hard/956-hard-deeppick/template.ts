type MyUnionToIntersection<U> = 
  (U extends U ? (x: U) => unknown : never) extends (x: infer R) => unknown ? R : never
type DeepPick<O extends object, Target extends string> = 
  Target extends `${infer F}.${infer S}`
  ? F extends F ? {
      `${F}`:
    }