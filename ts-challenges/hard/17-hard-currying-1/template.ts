type CurryFun<Fn> =
  Fn extends (...args: infer Args) => infer ReturnType
  ? Args extends [infer First, ...infer Rest]
    ? Args['length'] extends 1
      ? (arg: First) => ReturnType
      : (arg: First) => CurryFun<(...args: Rest) => ReturnType>
    : Fn
  : Fn
declare function Currying<F>(fn: F): CurryFun<F>

// 递归就完事啦！兄弟萌