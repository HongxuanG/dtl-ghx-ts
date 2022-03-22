type EqualOrGreaterThan<F extends number, S extends number, CountArr extends Array<unknown> = []> = 
  F extends S
  ? true
  : CountArr['length'] extends F
    ? false
    : CountArr['length'] extends S
      ? true
      : EqualOrGreaterThan<F, S, [...CountArr, unknown]>

type BuildTuple<N extends number, CountArr extends Array<unknown> = []> = 
  CountArr['length'] extends N ? CountArr : BuildTuple<N, [...CountArr, unknown]>

type SubtractHelper<M extends number, S extends number> = 
  BuildTuple<M> extends [...infer Rest, ...BuildTuple<S>] ? Rest['length'] : 0
// M => minuend, S => subtrahend
type ExtremeSubtract < M extends number, S extends number > =
  EqualOrGreaterThan < M, S > extends true
    ? SubtractHelper<M, S>
    : never 

