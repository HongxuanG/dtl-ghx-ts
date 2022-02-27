type Combination<A extends string, B extends string> = 
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`
type MainType<S extends string, Template extends string = S> = 
  S extends S
    ? Combination<S, AllCombinations<Exclude<Template, S>>>
    : never
type stringToUnion<T extends string> = T extends `${infer First}${infer Other}` ? First | stringToUnion<Other> : T
type AllCombinations<S extends string> = MainType<stringToUnion<S>>

    
type aas = AllCombinations<'AB'>